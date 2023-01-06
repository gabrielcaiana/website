<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
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
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a :href="url" target="_blank">
    <div class="flex flex-col md:flex-row gap-4">
      <NuxtImg
        class="w-100 md:min-w-[300px] md:w-[300px] h-[150px] bg-neutral-500 rounded-md"
        provider="cloudinary"
        :src="image"
        loading="lazy"
        :placeholder="title"
      />
      <div class="flex flex-col">
        <span class="text-red-400">{{ type }}</span>
        <span class="text-xl font-medium mb-2">{{ title }}</span>
        <p class="text-neutral-400">{{ description }}</p>
      </div>
    </div>
  </a>
</template>
