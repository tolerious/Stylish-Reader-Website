// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@pinia/nuxt",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: { mySecret: "secret:123" },
  robots: { allow: ["/"], disallow: ["/personalcenter"] },
  site: { url: "https://stylishreader.com" },
});
