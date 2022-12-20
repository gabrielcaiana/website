<script setup>
useHead({
  title: 'Sobre mim',
})
</script>
<template>
  <main class="flex flex-col">
    <section>
      <h1 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        {{ $t('aboutMe') }}
      </h1>
      <div class="border-b border-neutral-800 mb-6 pb-3">
        <p class="mb-6">
          {{ $t('about1') }}
        </p>

        <p class="mb-6">
          {{ $t('about2') }}
        </p>
      </div>

      <div class="border-b border-neutral-800 mb-8 pb-3">
        <p class="mb-6">
          {{ $t('about3') }}
        </p>

        <p>
          {{ $t('about4') }}
        </p>
      </div>
    </section>

    <section class="ml-4">
      <ul
        class="underline text-blue-300 font-medium list-disc flex flex-col gap-3"
      >
        <li>
          <a href="https://github.com/gabrielcaiana" target="_blank">
            {{ $t('github') }}</a
          >
        </li>
        <li>
          <a href="https://twitter.com/gabrielgueedes" target="_blank">
            {{ $t('twitter') }}</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabrielcaiana/" target="_blank">
            {{ $t('linkedin') }}</a
          >
        </li>
        <li>
          <a href="mailto:gabrielcaianaguedes@gmail.com" target="_blank">
            {{ $t('email') }}</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>
