<script setup>
useHead({
  title: 'Sobre mim',
})
</script>
<template>
  <main class="flex flex-col">
    <section>
      <h1 class="text-3xl font-medium mb-6 pb-3 border-b border-neutral-800">
        Sobre Mim
      </h1>
      <div class="border-b border-neutral-800 mb-6 pb-3">
        <p class="mb-6">
          Meu nome é <strong>Gabriel Caiana</strong> e sou um desenvolvedor
          <strong>front-end</strong>. Sou especializado em tecnologias
          Javascript, Vue, Web Performance e design.
        </p>

        <p class="mb-6">
          Sou formado em Análise e desenvolvimento de sistemas pela FIAP, além
          de possuir diversas formações de especialização em tecnologias de
          Frontend, Design e UX.
        </p>
      </div>

      <div class="border-b border-neutral-800 mb-8 pb-3">
        <p class="mb-6">
          Adoro desenvolver aplicações aleatórias para experimentar novas
          tecnologias e arquiteturas de projeto, então fique a vontade para
          visitar meu Github e portfólio pois sempre estou me aventurando em um
          novo projeto.
        </p>

        <p>
          Nos últimos anos trabalhei com diversas tecnologias, algumas que gosto
          bastante e fazem parte do meu dia a dia como desenvolvedor são
          (Javascript, Typescript, Vue, Nuxt, Vuex, Pinia, Jest, GraphQL,
          Storybook, Vite, Vuetify, Tailwind, Node).
        </p>
      </div>
    </section>

    <section class="ml-4">
      <ul
        class="underline text-blue-300 font-medium list-disc flex flex-col gap-3"
      >
        <li>
          <a href="https://github.com/gabrielcaiana" target="_blank">Github</a>
        </li>
        <li>
          <a href="https://twitter.com/gabrielgueedes" target="_blank"
            >Twitter</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gabrielcaiana/" target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="mailto:gabrielcaianaguedes@gmail.com" target="_blank"
            >Email</a
          >
        </li>
      </ul>
    </section>
  </main>
</template>
