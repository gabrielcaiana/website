// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/tailwind.css'],
  components: [{ path: '@/components', pathPrefix: false }],
  modules: ['nuxt-icon'],
  runtimeConfig: {
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
