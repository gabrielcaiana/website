<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-neutral-700 py-6 px-6 md:px-0">
    © Copyright {{ year }} by Gabriel Caiana. <strong class="text-red-500">♥</strong>
  </footer>
</template>
