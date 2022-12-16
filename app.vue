<script setup>
useHead({
  titleTemplate: (title) =>
    title !== 'Gabriel Caiana' ? `${title} · Gabriel Caiana` : title,
  htmlAttrs: {
    lang: 'pt-br',
  },
  meta: [
    {
      charset: 'utf-8',
    },
  ],
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #111;
  color: white;
  color-scheme: dark;
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
</style>
