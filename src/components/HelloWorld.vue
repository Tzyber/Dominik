<template>
  <v-container>
    <section id="home" class="mb-4 section" style="position: relative; overflow: hidden;">
      <div style="height: 100px;">
        <div class="moon"></div>
      </div>

      <v-row align="center" justify="center" class="meIntroduction">
        <v-col cols="6" md="5">
          <h2 class="typewriter text-h4 font-weight-bold" style="margin-bottom: 60px !important;" ref="typewriterElement"></h2>
          <h1 class="text-h3 mb-4">My name is Dominik</h1>
          <h2 class="text-h5">
            I am a <span class="underline">Web Developer</span> <br>
            Currently based in Wuppertal, Germany
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-avatar size="300">
            <v-img :src="me" alt="Dominik's profile picture"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </section>

    <!-- Particle animation background -->
    <Particles></Particles>

    <!-- About section -->
    <div class="col-sm-4 col-md-5 col-6" id="about">
      <div style="display: grid; justify-content: end; margin-bottom: -65px;">
        <v-img style="width: 200px" :src="astronaut"></v-img>
      </div>
      <hr />
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
      </section>
      <hr id="skills" />
      <skills></skills>
    </div>
    <hr class="mt-6" />

    <!-- Projects section -->
    <section id="projects" class="mb-16 section">
      <Projects></Projects>
    </section>
    <div>
      <v-img class="rocket" max-height="400px" :src="rocket"></v-img>
    </div>
    <hr />

    <!-- Contact section -->
    <section id="contact" class="contact-section section" style="padding-top: 145px !important">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="contact-card">
            <v-card-title class="headline">Contact Me</v-card-title>
            <v-card-subtitle class="subtitle">Let's get in touch!</v-card-subtitle>
            <v-card-text>
              <div class="contact-info">
                <div class="info-item">
                  <v-icon class="mr-2">mdi-email</v-icon>
                  <span><a class="email" href="mailto:mail@dominik-webdeveloper.com">mail@dominik-webdeveloper.com</a></span>
                </div>
                <div class="info-item">
                  <v-icon class="mr-2">mdi-phone</v-icon>
                  <span>01525 28113804</span>
                </div>
                <div class="info-item">
                  <v-icon class="mr-2">mdi-map-marker</v-icon>
                  <span>Wuppertal, Germany</span>
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
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import rocket from '@/assets/rakete.png';
import astronaut from '@/assets/astronaut.png';
import me from '@/assets/me.png';

const route = useRoute();

const typewriterElement = ref<HTMLElement | null>(null);
const welcomeText = "Welcome to my portfolio!";

const typeWriter = (text: string, i = 0) => {
  if (i < text.length && typewriterElement.value) {
    typewriterElement.value.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100);
  }
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  const cards = document.querySelectorAll('.custom-card');

  cards.forEach(card => {
    const cardElement = card as HTMLElement;

    cardElement.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = cardElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardElement.style.setProperty('--mouse-x', `${x}px`);
      cardElement.style.setProperty('--mouse-y', `${y}px`);
    });

    cardElement.addEventListener('mouseleave', () => {
      cardElement.style.setProperty('--mouse-x', `-9999px`);
      cardElement.style.setProperty('--mouse-y', `-9999px`);
    });
  });

  if (route.hash) {
    scrollToSection(route.hash.slice(1));
  }

  typeWriter(welcomeText);
});

watch(() => route.hash, (newHash) => {
  if (newHash) {
    scrollToSection(newHash.slice(1));
  }
});
</script>

<style scoped>
</style>
