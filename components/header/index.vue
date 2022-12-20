<script setup>
const { locale } = useI18n()
</script>

<template>
  <header
    class="pt-8 pb-4 px-6 text-white border-b border-neutral-800 flex justify-between items-center"
  >
    <nuxt-link to="/" class="font-medium"> Gabriel Caiana</nuxt-link>
    <div class="flex gap-3">
      <form class="text-neutral-300">
        <select class="bg-transparent" v-model="locale">
          <option value="pt">{{ $t('portuguese') }}</option>
          <option value="en">{{ $t('english') }}</option>
        </select>
      </form>
      |
      <a href="https://github.com/gabrielcaiana" target="_blank"
        ><Icon name="ph:github-logo-fill" size="24"
      /></a>

      <a href="https://twitter.com/gabrielgueedes" target="_blank"
        ><Icon name="ph:twitter-logo-fill" size="24" />
      </a>

      <a href="https://www.linkedin.com/in/gabrielcaiana/" target="_blank"
        ><Icon name="ph:linkedin-logo-fill" size="24"
      /></a>
    </div>
  </header>
</template>
