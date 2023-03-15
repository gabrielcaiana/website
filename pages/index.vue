<script setup>
useHead({
  title: 'Início',
})

const { projects } = await $fetch('/api/algolia/projects')

const { data: posts } = await useAsyncData('home', () =>
  queryContent('/blog').find()
)
</script>

<template>
  <main class="flex flex-col gap-[80px]">
    <section>
      <p class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Olá, Eu sou <strong>Gabriel Caiana</strong>
      </p>
      <h1>
        Desenvolvedor <strong>front-end</strong>, especializado em tecnologias <strong>Javascript</strong>,  <strong>Vue</strong>,
        <strong>Web Performance</strong> e <strong>design</strong>.
        <nuxt-link to="/about" class="text-blue-300 font-medium underline"
          >Leia mais <Icon name="ph:arrow-right" size="14"
        /></nuxt-link>
      </h1>
    </section>

    <section>
      <h2 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Posts Recentes
      </h2>
      <div class="flex flex-col gap-[48px]">
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

    <section>
      <h3 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Projetos Recentes
      </h3>

      <div class="flex flex-col gap-[48px]">
        <CardProject
          v-for="{ type, name, description, image, url } in projects"
          :key="name"
          :type="type"
          :title="name"
          :description="description"
          :image="image"
          :url="url"
        />
      </div>
    </section>
  </main>
</template>
