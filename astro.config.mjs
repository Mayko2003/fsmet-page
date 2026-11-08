// @ts-check
import { readFileSync } from "node:fs";
import { defineConfig, sessionDrivers } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

import react from "@astrojs/react";
import emdash, { local, s3 } from "emdash/astro";
import { postgres, sqlite } from "emdash/db";

// Astro carga los valores del entorno del build (Vercel) y, en local, de `.env`.
// `loadEnv` cubre el caso de `astro dev`, donde `.env` todavía no está en process.env.
const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const readEnv = (key) => process.env[key] || env[key] || "";

const isProduction = process.env.NODE_ENV === "production";
const databaseUrl = readEnv("DATABASE_URL");
const redisUrl = readEnv("REDIS_URL");
const s3Bucket = readEnv("S3_BUCKET");
const siteUrl = readEnv("EMDASH_SITE_URL") || (isProduction ? "https://fsmet.com.ar" : undefined);

// En local EmDash usa SQLite. En producción (Vercel) hace falta una base
// Postgres: el sistema de archivos de las funciones serverless es de solo lectura.
const isSupabase = (() => {
  try {
    return /(^|\.)supabase\.(com|co)$/i.test(new URL(databaseUrl).hostname);
  } catch {
    return false;
  }
})();

// El pooler de Supabase usa una CA propia ("Supabase Root 2021 CA"), que no
// está en el almacén de Node. La pasamos explícitamente para verificar el TLS.
const supabaseCa = isSupabase
  ? readFileSync(new URL("./certs/supabase-ca.crt", import.meta.url), "utf8")
  : undefined;

// Si la URL trae sslmode, pg-connection-string pisa el objeto `ssl` y descarta
// nuestra CA. En Supabase la quitamos y dejamos que mande `ssl.ca`.
const databaseConnectionString = (() => {
  if (!isSupabase) return databaseUrl;
  try {
    const url = new URL(databaseUrl);
    url.searchParams.delete("sslmode");
    return url.toString();
  } catch {
    return databaseUrl;
  }
})();

const database = databaseUrl
  ? postgres(
      /** @type {any} */ ({
        connectionString: databaseConnectionString,
        pool: { max: 5, connectionTimeoutMillis: 10_000 },
        ...(supabaseCa ? { ssl: { ca: supabaseCa, rejectUnauthorized: true } } : {}),
      }),
    )
  : sqlite({ url: "file:./data.db" });

// En local las imágenes se guardan en ./uploads. En producción conviene
// S3-compatible (R2, S3, MinIO) porque el disco de Vercel no persiste.
const storage = s3Bucket
  ? s3()
  : local({
      directory: "./uploads",
      baseUrl: "/_emdash/api/media/file",
    });

if (isProduction && process.env.VERCEL && !databaseUrl) {
  console.warn(
    "[emdash] DATABASE_URL no está configurada: se usará SQLite, que no persiste en Vercel.",
  );
}

// EmDash guarda la sesión del admin en Astro. El adaptador de Vercel no trae
// un driver por defecto, así que configuramos uno explícitamente.
const session = redisUrl
  ? { driver: sessionDrivers.redis({ url: redisUrl }) }
  : isProduction && process.env.VERCEL
    ? { driver: sessionDrivers.vercelRuntimeCache() }
    : { driver: sessionDrivers.fs() };

if (isProduction && process.env.VERCEL && !redisUrl) {
  console.warn(
    "[emdash] REDIS_URL no está configurada: se usará Vercel Runtime Cache para las sesiones. " +
      "Para un entorno multi-región estable, configurá Upstash Redis.",
  );
}

// https://astro.build/config
export default defineConfig({
  site: "https://fsmet.com.ar",

  // EmDash consulta el contenido en cada request, por eso el sitio pasa a SSR.
  output: "server",
  session,

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    webAnalytics: { enabled: true },
    // La primera request aplica migraciones y seed de EmDash; damos margen.
    maxDuration: 60,
  }),

  integrations: [
    icon(),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith("/admin/"),
      i18n: {
        defaultLocale: "es",
        locales: { es: "es", en: "en", pt: "pt", fr: "fr" },
      },
    }),
    react(),
    emdash({
      database,
      storage,
      siteUrl,
      admin: {
        siteName: "FSMET",
        locales: ["es-419", "en"],
      },
    }),
  ],
});
