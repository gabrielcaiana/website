// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/tailwind.css'],
  components: [{ path: '@/components', pathPrefix: false }],
  modules: [
    'nuxt-icon',
    '@nuxt/content',
    '@nuxtjs/web-vitals',
    '@nuxt/image-edge',
  ],
  image: {
    cloudinary: {
      baseURL: process.env.CLOUDINARY_BASE_URL,
    },
  },
  webVitals: {
    // provider: 'log',
    api: { url: '/api/web-vitals' },
    debug: true,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'dracula',
        default: 'dracula',
      },
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
