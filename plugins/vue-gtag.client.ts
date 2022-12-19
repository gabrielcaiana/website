import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const { googleId } = useRuntimeConfig()
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: googleId,
    },
  })
})
