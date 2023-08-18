<script setup>
useHead({
  title:
    'Desenvolvedor Front-end Especializado em Tecnologias JavaScript, Vue e Nuxt',
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
    icon: 'tabler:brand-twitter',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gabrielcaiana/',
    icon: 'tabler:brand-linkedin',
  },
  {
    name: 'github',
    url: 'https://github.com/gabrielcaiana',
    icon: 'tabler:brand-github',
  },
]
</script>

<template>
  <main class="flex flex-col gap-[80px]">
    <!-- Hero -->
    <section class="flex justify-center items-center">
      <div>
        <h1 class="text-2xl md:text-4xl text-center font-medium pb-3">
          Desenvolvedor <strong>Front-end</strong>
        </h1>
        <h2 class="max-w-[500px] md:text-xl text-center">
          Especializado em Desenvolvimento Front-end com Domínio de Tecnologias
          como <strong>JavaScript</strong>, <strong>TypeScript</strong>,
          <strong>Vue</strong>, <strong>Nuxt</strong> e
          <strong>Node.js</strong>.
        </h2>

        <div class="flex justify-center gap-2 mt-3">
          <a
            v-for="item in social"
            :key="social.name"
            :href="item.url"
            target="_blank"
          >
            <Icon
              class="hover:scale-125 transition-transform"
              :name="item.icon"
              size="24"
              :alt="item.name"
              :title="item.name"
              :aria-label="`Link para ${item.name}`"
            />
          </a>
        </div>
      </div>
    </section>

    <!-- Posts -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold">
          <strong class="gradient-text">Posts</strong> Recentes
        </h3>

        <nuxt-link to="/blog">
          <span class="font-bold text-sm mr-2">Ver todos os posts</span>
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

    <!-- Projects -->
    <section>
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">
          <strong class="gradient-text">Projetos</strong> Recentes
        </h2>

        <nuxt-link to="/projects">
          <span class="font-bold text-sm mr-2">Ver todos os projetos</span>
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
  </main>
</template>
