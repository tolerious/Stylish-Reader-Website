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
  runtimeConfig: {
    public: {
      apiServer: process.env.API_SERVER,
    },
  },
  robots: { allow: ["/"], disallow: ["/personalcenter"] },
  site: { url: "https://stylishreader.com" },
});
