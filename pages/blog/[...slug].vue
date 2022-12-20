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
    <ContentDoc />
  </main>
</template>

<style lang="scss">
.blog-content {
  p,
  li {
    @apply text-neutral-300;
  }
  p {
    @apply my-4;
  }

  a {
    @apply underline text-blue-300;
  }

  h2 {
    @apply text-2xl pt-[32px] mb-2;

    a {
      @apply no-underline text-white;
    }
  }

  h3 {
    @apply text-xl pt-[32px] mb-2;

    a {
      @apply no-underline text-white;
    }
  }

  ol li {
    @apply list-decimal py-2 ml-4;
  }
}
</style>
