<script setup>
useHead({
  titleTemplate: (title) =>
    title !== 'Gabriel Caiana' ? `${title} · Gabriel Caiana` : title,
  htmlAttrs: {
    lang: 'pt-br',
  },
  bodyAttrs: {},
  meta: [
    {
      charset: 'utf-8',
    },
  ],
})
</script>

<template>
  <div class="bg-neutral-900 h-screen">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
