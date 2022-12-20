<script setup>
useHead({
  title: 'Início',
  meta: [
    {
      name: 'description',
      description:
        'Sou um engenheiro de software de 26 anos, especializado em tecnologias Javascript, Vue, Web Performance e design.',
    },
  ],
})

const { projects } = await $fetch('/api/algolia/projects')

const { data: posts } = await useAsyncData('home', () =>
  queryContent('/blog').find()
)
</script>

<template>
  <main class="flex flex-col gap-[80px]">
    <section>
      <h1 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        {{ $t('salutation') }},
      </h1>
      <p>
        {{ $t('description') }},
        <nuxt-link to="/about" class="text-blue-300 font-medium underline">
          {{ $t('readMore') }} <Icon name="ph:arrow-right" size="14"
        /></nuxt-link>
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        {{ $t('recentPosts') }}
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
        {{ $t('recentProjects') }}
      </h3>

      <div class="flex flex-col gap-[48px]">
        <CardProject
          v-for="(project, index) in projects"
          :key="index"
          :type="project.type"
          :title="project.name"
          :description="project.description"
          :image="project.image"
          :url="project.url"
        />
      </div>
    </section>
  </main>
</template>
