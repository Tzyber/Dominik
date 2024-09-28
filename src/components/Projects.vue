<template>
    <h2 style="display: flex; justify-content: center;" class="mb-6">Projects</h2>
      <div>
      <v-row class="mb-4" style="display: flex; justify-content: center;">
        <v-col cols="12" md="3" sm="4" >
          <v-card class="project-card pa-4" style="min-height: 600px">
            <v-img
              :src="projectImage1"
              alt="Project Image 1"
              class="mb-4"
            ></v-img>
            <h3>Twitch Chat Bot</h3>
            <br>
            <p> A Twitch chat bot that alerts the chat whenever someone subscribes, gifts subs, or cheers with Bits. It can also be used as a quiz bot.</p>
            <div class="mt-2"><p><a class="links" href="https://github.com/Tzyber/twitchChatBot" target="_blank">Check Code Here</a></p></div>
            <div class="mt-2">
              <v-chip class="mr-2">Javascript</v-chip>
              <v-chip class="mr-2">Express</v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="4" >
          <v-card class="project-card pa-4" style="min-height: 600px">
            <v-img
              :src="projectImage2"
              alt="Portfolio"
              class="mb-4"
            ></v-img>
            <h3>Portfolio</h3>
            <br>
            <p>My new  Portfolio written in Vue, Vuetify and typescript. Currently this Active page. Still in Development but further updates are comming like new Projects or other  ideas</p>
            <div class="mt-2"><p><a class="links" href="https://github.com/Tzyber/Dominik" target="_blank">Check Code Here</a></p></div>
            <div class="mt-4">
              <v-chip class="mr-2">typescript</v-chip>
              <v-chip class="mr-2">Vuetify</v-chip>
              <v-chip>Vue</v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="4">
          <v-card class="project-card pa-4" style="min-height: 600px">
            <v-img
              :src="projectImage3"
              alt="Project Image 3"
              class="mb-4"
            ></v-img>
            <h3>Netflix Recreation</h3>
            <br>
            <p>My small Recreation of Netflix. there might still be some Bugs but those will be resolved in the future. Github Pages is a bit picky with images.</p>
            <div class="mt-2"> <p><a class="links" href="https://tzyber.github.io/netflix-clone/" target="_blank">Check Demo Here</a></p> or<p><a class="links" href="https://github.com/Tzyber/netflix-clone/tree/main" target="_blank">Check Code Here</a></p></div>
            <div class="mt-2">
            <v-chip class="mr-2">typescript</v-chip>
            <v-chip class="mr-2">tailwind</v-chip>
            <v-chip>Vue</v-chip>
          </div>
  
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>
<script setup lang="ts">
import projectImage1 from '@/assets/twitchbot.jpeg';
import projectImage2 from '@/assets/portfolio.jpeg';
import projectImage3 from '@/assets/netflix.jpeg';
</script>