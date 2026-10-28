// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://fsmet.com.ar",

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
  }),

  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: { es: "es", en: "en", pt: "pt", fr: "fr" },
      },
    }),
  ],
});