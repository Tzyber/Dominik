<template>
  <h2 class="mb-6" style="display: flex; justify-content: center;">Projects</h2>
  <div>
    <v-row class="mb-4" style="display: flex; justify-content: center;">
      <v-col v-for="project in projects" :key="project.title" cols="12" md="3" sm="4">
        <v-card class="project-card pa-4" style="min-height: 600px">
          <v-img
            :alt="project.title"
            class="mb-4"
            :src="project.image"
          />
          <h3>{{ project.title }}</h3>
          <br>
          <p>{{ project.description }}</p>
          <div v-for="link in project.links" :key="link.url" class="mt-2">
            <p><a class="links" :href="link.url" target="_blank">{{ link.text }}</a></p>
          </div>
          <div class="mt-4">
            <v-chip v-for="tag in project.tags" :key="tag" class="mr-2">{{ tag }}</v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
  import projectImage1 from '@/assets/twitchbot.jpeg'
  import projectImage2 from '@/assets/portfolio.jpeg'
  import projectImage3 from '@/assets/netflix.jpeg'

  const projects = [
    {
      title: 'Twitch Chat Bot',
      description: 'A Twitch chat bot that alerts the chat whenever someone subscribes, gifts subs, or cheers with Bits. It can also be used as a quiz bot.',
      image: projectImage1,
      links: [
        { text: 'Check Code Here', url: 'https://github.com/Tzyber/twitchChatBot' }
      ],
      tags: ['Javascript', 'Express']
    },
    {
      title: 'Portfolio',
      description: 'My new Portfolio written in Vue, Vuetify and typescript. Currently this Active page. Still in Development but further updates are comming like new Projects or other ideas',
      image: projectImage2,
      links: [
        { text: 'Check Code Here', url: 'https://github.com/Tzyber/Dominik' }
      ],
      tags: ['typescript', 'Vuetify', 'Vue']
    },
    {
      title: 'Netflix Recreation',
      description: 'My small Recreation of Netflix. there might still be some Bugs but those will be resolved in the future. Github Pages is a bit picky with images.',
      image: projectImage3,
      links: [
        { text: 'Check Demo Here', url: 'https://tzyber.github.io/netflix-clone/' },
        { text: 'Check Code Here', url: 'https://github.com/Tzyber/netflix-clone/tree/main' }
      ],
      tags: ['typescript', 'tailwind', 'Vue']
    }
  ]
</script>
