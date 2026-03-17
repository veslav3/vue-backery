// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["~/assets/css/main.css"],
  nitro: {
    routeRules: {
      '/api/**': { proxy: 'http://localhost:3001/api/**' },
    },
  },
})
