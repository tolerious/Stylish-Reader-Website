// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  runtimeConfig: { mySecret: "secret:123" },
  robots: { allow: ["/"], disallow: ["/personalcenter"] },
});
