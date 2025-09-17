<template>
  <v-container>
    <section id="home" class="mb-4 section" style="position: relative;">
      <div style="height: 100px;">
        <div class="moon" />
      </div>

      <v-row align="center" class="meIntroduction" justify="center">
        <v-col cols="6" md="5">
          <h2 ref="typewriterElement" class="typewriter text-h4 font-weight-bold" style="margin-bottom: 60px !important;" />
          <h1 class="text-h3 mb-4">My name is Dominik</h1>
          <h2 class="text-h5">
            I am a <span class="underline">Web Developer</span> <br>
            Currently based in Wuppertal, Germany
          </h2>
        </v-col>
        <v-col class="text-center" cols="12" md="6">
          <v-avatar class="profilePicture" size="300">
            <v-img alt="Dominik's profile picture" :src="me" />
          </v-avatar>
        </v-col>
      </v-row>
    </section>

    <!-- About section -->
    <div id="about" class="col-sm-4 col-md-5 col-6">
      <div style="display: grid; justify-content: end; margin-bottom: -65px;">
        <v-img :src="astronaut" style="width: 200px" />
      </div>
      <div style="z-index: 100;">
        <hr>
      </div>
      <section class="mb-12 mt-12">
        <h2 class="aboutMe mb-6">About me</h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3>About Me</h3>
              <p>I am a web developer from Wuppertal.</p>
              <p>I work with modern technologies like TypeScript, Vue, Tailwind, Vuetify, and PrimeVue to create engaging and functional web applications.</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3>My Skills</h3>
              <p>I am proficient in modern web development, including TypeScript, Vue, Tailwind, Vuetify, and PrimeVue. These skills enable me to build dynamic, responsive, and visually appealing web applications.</p>
            </v-card>
          </v-col>
        </v-row>
        <TimeLine />
      </section>
      <hr id="skills">
      <skills />
    </div>
    <hr class="mt-6">

    <!-- Projects section -->
    <section id="projects" class="mb-16 section">
      <div class="nebulaSection">
        <Nebula />
      </div>
      <Projects />
    </section>
    <div>
      <v-img class="rocket" max-height="400px" :src="rocket" />
    </div>
    <hr>

    <!-- Contact section -->
    <section id="impressum" class="contact-section space-theme">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="contact-card space-glow">
            <v-card-title class="headline">👨‍🚀 Impressum</v-card-title>
            <v-card-subtitle class="subtitle">Pflichtangaben nach DDG</v-card-subtitle>
            <v-card-text>
              <div class="contact-info">
                <div class="info-item">
                  <v-icon class="mr-2">mdi-account</v-icon>
                  <span><strong>Dominik Dörrier</strong></span>
                </div>
                <div class="info-item">
                  <v-icon class="mr-2">mdi-home</v-icon>
                  <span>Lothringerstraße 41, 42107 Wuppertal</span>
                </div>
                <div class="info-item">
                  <v-icon class="mr-2">mdi-phone</v-icon>
                  <span>01525 281 38 04</span>
                </div>
                <div class="info-item">
                  <v-icon class="mr-2">mdi-email</v-icon>
                  <a class="email" href="mailto:mail@dominik-webdeveloper.com">
                    mail@dominik-webdeveloper.com
                  </a>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import rocket from '@/assets/rakete.png'
  import astronaut from '@/assets/astronaut.png'
  import me from '@/assets/me.png'

  const route = useRoute()

  const typewriterElement = ref<HTMLElement | null>(null)
  const welcomeText = 'Welcome to my portfolio!'

  const typeWriter = (text: string, i = 0) => {
    if (i < text.length && typewriterElement.value) {
      typewriterElement.value.innerHTML += text.charAt(i)
      i++
      setTimeout(() => typeWriter(text, i), 100)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  onMounted(() => {
    const cards = document.querySelectorAll('.custom-card')

    cards.forEach(card => {
      const cardElement = card as HTMLElement

      cardElement.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        cardElement.style.setProperty('--mouse-x', `${x}px`)
        cardElement.style.setProperty('--mouse-y', `${y}px`)
      })

      cardElement.addEventListener('mouseleave', () => {
        cardElement.style.setProperty('--mouse-x', `-9999px`)
        cardElement.style.setProperty('--mouse-y', `-9999px`)
      })
    })

    if (route.hash) {
      scrollToSection(route.hash.slice(1))
    }

    typeWriter(welcomeText)
  })

  watch(() => route.hash, newHash => {
    if (newHash) {
      scrollToSection(newHash.slice(1))
    }
  })
</script>

<style scoped>
</style>
