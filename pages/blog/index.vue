<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => {
  return queryContent('/blog').find()
})

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content: 'Blog posts',
    },
  ],
})
</script>

<template>
  <section>
    <div class="flex justify-center items-center mb-6">
      <h1 class="text-2xl font-bold gradient-text">Posts</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 shrink">
      <CardPost
        v-for="{ _path, title, slug, description, img } in posts"
        :key="slug"
        :title="title"
        :description="description"
        :image="img"
        :path="_path"
      />
    </div>
  </section>
</template>
