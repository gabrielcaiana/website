import { AlgoliaRequest } from '~~/server/services/algolia-service'

export default defineEventHandler(async (event) => {
  const algolia = new AlgoliaRequest()
  const projects = await algolia.get()
  return { projects }
})
