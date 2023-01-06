<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nuxt-link :to="path">
    <div class="flex flex-col md:flex-row gap-4">
      <NuxtImg
        class="w-100 md:min-w-[300px] md:w-[300px] h-[150px] bg-neutral-500 rounded-md object-cover"
        provider="cloudinary"
        :src="image"
        :alt="title"
      />
      <div class="flex flex-col">
        <span class="text-red-400">Post</span>
        <span class="text-xl font-medium mb-2">{{ title }}</span>
        <p class="text-neutral-400">{{ description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
