<script setup lang="ts">
useHead({
  title: 'Projetos',
})

interface IProjects {
  name: string
  description: string
  url: string
  stack: string[]
  objectID: string
}

const { projects } = (await $fetch('/api/algolia/projects')) as {
  projects: IProjects[]
}

const dataProjects = projects.map((project: IProjects) => ({
  name: project.name,
  description: project.description,
  url: project.url,
  stack: project.stack,
  objectID: project.objectID,
}))
</script>

<template>
  <section>
    <div class="flex flex-col justify-center items-center mb-6">
      <h1 class="text-2xl font-bold gradient-text">Projetos</h1>
      <span class="font-medium text-neutral-400"
        >Aqui você encontra alguns projetos que desenvolvi recentemente</span
      >
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
</template>
