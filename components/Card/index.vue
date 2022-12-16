<script setup>
defineProps({
  label: {
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
})
</script>
<template>
  <nuxt-link to="/">
    <div class="flex flex-col md:flex-row gap-4">
      <div
        class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
      ></div>
      <div class="flex flex-col">
        <span class="text-red-400">{{ label }}</span>
        <span class="text-xl font-medium mb-2">{{ title }}</span>
        <p class="text-neutral-400">{{ description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>
