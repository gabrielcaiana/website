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
    <div class="flex flex-col gap-4 bg-white/10 w-full rounded-md">
      <NuxtImg
        class="bg-neutral-500 h-[170px] rounded-t-md"
        provider="cloudinary"
        width="100%"
        height="170px"
        :src="image"
        :alt="title"
        fit="cover"
      />
      <div class="flex flex-col px-2 pb-6 text-center">
        <span class="text-xl font-medium mb-2 line-clamp-1">{{ title }}</span>
        <p class="text-neutral-400 line-clamp-4">{{ description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
