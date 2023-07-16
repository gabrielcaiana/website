import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const { googleId } = useRuntimeConfig()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: googleId,
      },
    },
    nuxtApp.$router as any,
  )
})
