export default (meta: any) => {
  const metaTags = [
    {
      name: 'description',
      content: meta?.description || '',
    },
    {
      name: 'author',
      content: meta?.author || '',
    },
    {
      name: 'publisher',
      content: meta?.author || '',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: meta?.title || '',
    },
    // Facebook & LinkedIn
    {
      hid: 'og:title',
      property: 'og:title',
      content: meta?.title || '',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: meta?.description || '',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: meta?.siteType || 'website',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: meta?.url || '',
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: meta?.img || '',
    },
    {
      hid: 'og:image:width',
      property: 'og:image:width',
      content: meta?.img_size?.width || '',
    },
    {
      hid: 'og:image:height',
      property: 'og:image:height',
      content: meta?.img_size?.height || '',
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: meta?.locale || 'pt-BR',
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: meta?.title || '',
    },
    // Twitter
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: meta?.twitter_card || 'summary_large_image',
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: meta?.twitter || '',
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: meta?.twitter || '',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: meta?.title || '',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: meta?.description || '',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: meta?.img || '',
    },
    {
      hid: 'twitter:image:width',
      name: 'twitter:image:width',
      content: meta?.img_size?.width || '',
    },
    {
      hid: 'twitter:image:height',
      name: 'twitter:image:height',
      content: meta?.img_size?.height || '',
    },
  ]

  return metaTags
}
