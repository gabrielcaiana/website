import algoliasearch from 'algoliasearch'

const { algoliaAppId, algoliaApiKey } = useRuntimeConfig()

const client = algoliasearch(algoliaAppId, algoliaApiKey)
const index = client.initIndex('projects')

export class AlgoliaRequest {
  async get() {
    const response = await index.search('').then(({ hits }) => hits)
    return response
  }
}
