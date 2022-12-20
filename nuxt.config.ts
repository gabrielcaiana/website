import pt from './locales/pt'
import en from './locales/en'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/tailwind.css'],
  components: [{ path: '@/components', pathPrefix: false }],
  modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/i18n'],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'dracula',
        default: 'dracula',
      },
    },
  },

  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    vueI18n: {
      legacy: false,
      locale: 'pt',
      messages: { pt, en },
    },
  },

  runtimeConfig: {
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    public: {
      googleId: process.env.GOOGLE_ID,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
