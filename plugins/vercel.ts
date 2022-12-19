import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((nuxtApp) => {
  //@ts-ignore
  nuxtApp.vueApp.use(inject())
})
