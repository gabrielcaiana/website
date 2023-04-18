<script setup>
useHead({
  title: 'Início',
})

const { projects } = await $fetch('/api/algolia/projects')

const dataProjects = projects.slice(0, 3).map((project) => ({
  name: project.name,
  description: project.description,
  url: project.url,
  stack: project.stack,
}))

const { data: posts } = await useAsyncData('home', () =>
  queryContent('/blog').limit(3).find()
)

const social = [
  {
    name: 'twitter',
    url: 'https://twitter.com/gabriel_caiana',
    icon: '/icons/twitter.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gabrielcaiana/',
    icon: '/icons/linkedin.png',
  },
  {
    name: 'github',
    url: 'https://github.com/gabrielcaiana',
    icon: '/icons/github.png',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@gabrielcaiana',
    icon: '/icons/youtube.png',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[80px]">
    <!-- Hero -->
    <section class="flex justify-between items-center">
      <div>
        <p class="text-4xl font-medium pb-3">
          Olá, sou o <strong class="gradient-text">Gabriel Caiana</strong>
        </p>
        <h1 class="max-w-[500px] text-xl">
          Desenvolvedor <strong>front-end</strong>, especializado em tecnologias
          <strong>Javascript</strong>, <strong>Vue</strong>,
          <strong>Web Performance</strong> e <strong>design</strong>.
        </h1>

        <div class="flex gap-2 mt-3">
          <a v-for="item in social" :key="social.name" :href="item.url">
            <img :src="item.icon" :alt="item.name" class="w-[36px]" />
          </a>
        </div>
      </div>

      <div class="hidden md:block">
        <img src="/avatar.png" alt="avatar" />
      </div>
    </section>

    <!-- Projects -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">
          <strong class="gradient-text">Projetos</strong> Recentes
        </h2>

        <nuxt-link to="/projects">
          <span class="font-bold text-sm mr-2">Ve todos os posts</span>
          <Icon name="ph:arrow-right" />
        </nuxt-link>
      </div>

      <div class="flex flex-col gap-[48px]">
        <CardProject
          v-for="{ name, description, url, stack } in dataProjects"
          :key="name"
          :title="name"
          :description="description"
          :url="url"
          :stack="stack"
        />
      </div>
    </section>

    <!-- Posts -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold">
          <strong class="gradient-text">Posts</strong> Recentes
        </h3>

        <nuxt-link to="/posts">
          <span class="font-bold text-sm mr-2">Ve todos os posts</span>
          <Icon name="ph:arrow-right" />
        </nuxt-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 shrink">
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
  </main>
</template>
