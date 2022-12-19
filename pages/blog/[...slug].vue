<script setup>
const { path } = useRoute()
const { data } = await useAsyncData('post', () => {
  return queryContent('/blog').where({ _path: path }).findOne()
})

const { page } = useContent()
useContentHead(page)
</script>
<template>
  <main class="blog-content">
    <header>
      <h1 class="text-4xl mb-6">{{ data.title }}</h1>
      <p class="text-xl">{{ data.description }}</p>
      <img class="mb-[64px]" :src="data.img" :alt="data.title" />
    </header>
    <ContentDoc>
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) não encontrado</h2>
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="scss">
.blog-content {
  p {
    @apply my-4;
  }

  a {
    @apply underline text-blue-300;
  }
}
</style>
