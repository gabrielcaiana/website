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
        Blog Posts
      </h2>
      <div class="flex flex-col gap-[48px]">
        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
          ></div>
          <div class="flex flex-col">
            <span class="text-red-400">Blog Post</span>
            <span class="text-xl font-medium mb-2"
              >Como adicionar a análise de pacotes do webpack em seu projeto
              nuxt</span
            >
            <p class="text-neutral-400">
              Visualize o tamanho dos arquivos de saída do webpack com um mapa
              de árvore interativo dentro do seu projeto com nuxtjs.
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
          ></div>
          <div class="flex flex-col">
            <span class="text-red-400">Blog Post</span>
            <span class="text-xl font-medium mb-2"
              >Entendendo as 10 Heurísticas de Nielsen para melhorar a
              experiência do usuário
            </span>
            <p class="text-neutral-400">
              As 10 Heurísticas de Nielsen foram criadas em 1994 pelo cientista
              da computação Jakob Nielsen, também conhecido como o pai da
              usabilidade. Ao lado de Don Norman, ele criou posteriormente a
              Nielsen Norman Group, renomada empresa americana de consultoria em
              interface e experiência de usuário.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Projetos Recentes
      </h3>

      <div class="flex flex-col gap-[48px]">
        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
          ></div>
          <div class="flex flex-col">
            <span class="text-red-400">Nuxt JS</span>
            <span class="text-xl font-medium mb-2">NuxtBnB</span>
            <p class="text-neutral-400">Clone do AirBnB utilizando o nuxtjs</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
          ></div>
          <div class="flex flex-col">
            <span class="text-red-400">Nuxt JS</span>
            <span class="text-xl font-medium mb-2">Receitas online</span>
            <p class="text-neutral-400">
              Sistema para a publicação e gerenciamento de receitas online
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div
            class="w-100 md:min-w-[300px] h-[150px] bg-neutral-500 rounded-md"
          ></div>
          <div class="flex flex-col">
            <span class="text-red-400">Nuxt JS</span>
            <span class="text-xl font-medium mb-2">Nuxt Finance</span>
            <p class="text-neutral-400">
              Gerenciamento de entradas e controle de gastos .
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
