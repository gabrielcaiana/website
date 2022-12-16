<script setup>
const props = defineProps({
  error: Object,
})
const message = computed(() => String(props.error?.message || ''))
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes('404')
)
const isDev = process.dev
const handleError = () => clearError({ redirect: '/' })
</script>
<template>
  <NuxtLayout>
    <div class="flex flex-col items-center mt-12">
      <div class="text-2xl mb-2">
        {{ is404 ? 'Esta página não pôde ser encontrada' : 'Um erro ocorreu' }}
      </div>
      <div class="text-xl text-neutral-500">
        Parece que você seguiu um link quebrado ou inseriu um URL que não
        existem neste site.
      </div>
      <pre class="my-4" v-if="isDev">{{ error }}</pre>
      <button
        class="bg-neutral-400 text-white p-3 rounded-md hover:bg-neutral-600"
        @click="handleError"
      >
        Voltar
      </button>
    </div>
  </NuxtLayout>
</template>
