// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://fsmet.com.ar",

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "pt"],
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

  integrations: [icon()],
});