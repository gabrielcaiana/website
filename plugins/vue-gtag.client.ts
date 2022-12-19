import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: process.env.GOOGLE_ID,
      },
    },
    nuxtApp.$router
  )
})
