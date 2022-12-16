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

const posts = ref([
  {
    label: 'Blog Post',
    title: 'Como adicionar a análise de pacotes do webpack em seu projeto nuxt',
    description:
      ' Visualize o tamanho dos arquivos de saída do webpack com um mapa de árvore interativo dentro do seu projeto com nuxtjs.',
  },
  {
    label: 'Blog Post',
    title:
      'Entendendo as 10 Heurísticas de Nielsen para melhorar a experiência do usuário',
    description:
      'As 10 Heurísticas de Nielsen foram criadas em 1994 pelo cientista da computação Jakob Nielsen, também conhecido como o pai da usabilidade. Ao lado de Don Norman, ele criou posteriormente a Nielsen Norman Group, renomada empresa americana de consultoria em interface e experiência de usuário.',
  },
])

console.log(projects)
</script>

<template>
  <main class="flex flex-col gap-[80px]">
    <section>
      <h1 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Olá, Eu sou Gabriel Caiana
      </h1>
      <p>
        Sou um engenheiro de software de 26 anos, especializado em tecnologias
        Javascript, Vue, Web Performance e design.
        <nuxt-link to="/about" class="text-blue-300 font-medium underline"
          >Leia mais <Icon name="ph:arrow-right" size="14"
        /></nuxt-link>
      </p>
    </section>

    <section>
      <h2 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Posts Recentes
      </h2>
      <div class="flex flex-col gap-[48px]">
        <Card
          v-for="(post, index) in posts"
          :key="index"
          :label="post.label"
          :title="post.title"
          :description="post.description"
        />
      </div>
    </section>

    <section>
      <h3 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Projetos Recentes
      </h3>

      <div class="flex flex-col gap-[48px]">
        <Card
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
