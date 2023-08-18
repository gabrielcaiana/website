<script setup>
import global from '~/utils/global'
import getSocialMeta from '~/utils/metatags'
const meta = getSocialMeta(global)

useHead({
  titleTemplate: (title = '') =>
    title !== global.title ? `${title} · ${global.title}` : title,
  htmlAttrs: {
    lang: 'pt-br',
  },
  meta: [
    ...meta,
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
  ],
  link: [
    {
      rel: 'canonical',
      href: global.url,
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
  script: [
    {
      hid: 'schema-org',
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Gabriel Caiana',
        jobTitle: 'Desenvolvedor Front-end',
        url: 'https://gabrielcaiana.com',
        sameAs: [
          'https://www.linkedin.com/in/gabrielcaiana',
          'https://github.com/gabrielcaiana',
          'https://twitter.com/gabriel_caiana',
        ],
      },
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
html,
body,
#__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: white;
  @apply bg-neutral-darkest;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.gradient-text,
.router-link-exact-active {
  background-color: white;
  background-image: linear-gradient(135deg, #a3e635 0%, #22d3ee 100%);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.router-link-exact-active {
  font-weight: 600;
}
</style>
