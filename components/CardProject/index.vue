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
  url: {
    type: String,
    required: true,
  },
  stack: {
    type: Array,
    required: true,
  },
})

const randomTailwindColor = () => {
  const tailwindColors = [
    'bg-[#E879F9]',
    'bg-[#A3E635]',
    'bg-[#38BDF8]',
    'bg-[#FB7185]',
    'bg-[#A78BFA]',
    'bg-[#34D399]',
    'bg-[#FACC15]',
    'bg-[#818CF8]',
  ]
  const randomIndex = Math.floor(Math.random() * tailwindColors.length)
  return tailwindColors[randomIndex]
}
</script>

<template>
  <a :href="url" target="_blank">
    <div class="flex flex-col md:flex-row gap-4 bg-white/10 p-10 rounded-md">
      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row items-center gap-2 mb-3">
          <span class="text-xl text-center md:text-left font-bold">{{ title }}</span>
          <ul class="flex flex-wrap justify-center gap-2">
            <li
              v-for="(item, index) in stack"
              :key="index"
              class="p-1 rounded-md text-neutral-darkest/70 text-sm font-semibold"
              :class="randomTailwindColor()"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <p class="text-neutral">{{ description }}</p>
      </div>
    </div>
  </a>
</template>
