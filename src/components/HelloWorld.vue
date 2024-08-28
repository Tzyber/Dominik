<template>
  <v-container>
    <section id="home" class="mb-4 section">
      <v-row align="center" justify="center">
        <v-col cols="6" md="5">
          <h2 class="typewriter text-h4 font-weight-bold mb-6" ref="typewriterElement"></h2>
          <h1 class="text-h3 mb-4">My name is Dominik</h1>
          <h2 class="text-h5">
            I am a <span class="underline">Web Developer</span> <br>
            Currently based in Wuppertal, Germany
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-avatar size="300">
            <v-img
              :src="me"
              alt="Dominik's profile picture"
            ></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </section>

    <!-- About section -->
    <div class="col-sm-4 col-md-5 col-6" id="about">
      <hr />
      <section class="mb-12 mt-12" >
        <h2 class="aboutMe mb-6" >About me</h2>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3>About Me</h3>
              <p>I am a web developer from Wuppertal. </p>
              <p>I work with modern technologies like TypeScript, Vue, Tailwind, Vuetify, and PrimeVue to create engaging and functional web applications.</p>
            <br>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <h3>My Skills</h3>
              <p>I am proficient in modern web development, </p>
              <p> including TypeScript, Vue, Tailwind, Vuetify, and PrimeVue. These skills enable me to build dynamic, responsive, and visually appealing web applications.</p>
              <br>
            </v-card>
          </v-col>
        </v-row>
      </section>
      <hr />
    </div>

    <!-- Projects section -->
<section id="projects" class="mb-16 section">
      <h2 style="display: flex; justify-content: center;" class="mb-6">Projects</h2>
      <div>
      <v-row class="mb-4" style="display: flex; justify-content: center;">
        <v-col cols="12" md="3" sm="4" >
          <v-card class="project-card pa-4">
            <v-img
              :src="projectImage1"
              alt="Project Image 1"
              class="mb-4"
            ></v-img>
            <h3>Twitch Chat Bot</h3>
            <br>
            <p> A Twitch chat bot that alerts the chat whenever someone subscribes, gifts subs, or cheers with Bits. It can also be used as a quiz bot.</p>
            <div class="mt-2"> <p><a class="links" href="https://github.com/Tzyber/twitchChatBot" target="_blank">Check Code Here</a></p></div>
            <div class="mt-2">
              <v-chip class="mr-2">Javascript</v-chip>
              <v-chip class="mr-2">Express</v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="4" >
          <v-card class="project-card pa-4">
            <v-img
              :src="projectImage2"
              alt="Portfolio"
              class="mb-4"
            ></v-img>
            <h3>Portfolio</h3>
            <br>
            <p>My new  Portfolio written in Vue, Vuetify and typescript. Currently this Active page. Still in Development but further updates are comming like new Projects or other  ideas</p>

            <div class="mt-4">
              <v-chip class="mr-2">typescript</v-chip>
              <v-chip class="mr-2">Vuetify</v-chip>
              <v-chip>Vue</v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" sm="4">
          <v-card class="project-card pa-4">
            <v-img
              :src="projectImage3"
              alt="Project Image 3"
              class="mb-4"
            ></v-img>
            <h3>Netflix Recreation</h3>
            <br>
            <p>My small Recreation of Netflix. there might still be some Bugs but those will be resolved in the future. Github Pages is a bit picky with images.</p>
            <div class="mt-2"> <p><a class="links" href="https://tzyber.github.io/netflix-clone/" target="_blank">Check Demo Here</a></p></div>
            <div class="mt-2">
            <v-chip class="mr-2">typescript</v-chip>
            <v-chip class="mr-2">tailwind</v-chip>
            <v-chip>Vue</v-chip>
          </div>
   
          </v-card>
        </v-col>
      </v-row>
    </div>
    </section>
 <hr/>
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
import projectImage1 from '@/assets/twitchbot.jpeg';
import projectImage2 from '@/assets/portfolio.jpeg';
import projectImage3 from '@/assets/netflix.jpeg';
import me from '@/assets/me.png';

const route = useRoute();

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

watch(() => route.hash, (newHash) => {
  if (newHash) {
    scrollToSection(newHash.slice(1));
  }
});

onMounted(() => {
  if (route.hash) {
    scrollToSection(route.hash.slice(1));
  }
});

const typewriterElement = ref<HTMLElement | null>(null);
const welcomeText = "Welcome to my portfolio!";

const typeWriter = (text: string, i = 0) => {
  if (i < text.length && typewriterElement.value) {
    typewriterElement.value.innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i), 100);
  }
};

onMounted(() => {
  typeWriter(welcomeText);
});
</script>



<style scoped>
.section {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 64px;
}

.underline {
  box-shadow: inset 0 -7px 0 rgba(83, 109, 254, .41);
}

.aboutMe {
  display: flex;
  justify-content: center;
}

.project-card {
  border: 2px solid transparent;
  box-shadow: inset 0 0 0 rgba(83, 109, 254, 0);
  transition: box-shadow 0.3s ease-in-out;
}

.project-card:hover {
  box-shadow: inset 0 -4px 0 rgba(83, 109, 254, 1);
}

.contact-card {
  background-color: #222;
  color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.contact-card .headline {
  font-size: 1.5rem;
  font-weight: bold;
}

.contact-card .subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-info {
  margin-top: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.info-item v-icon {
  margin-right: 10px;
}

.info-item span {
  font-size: 1rem;
}

.email:link{color: #fff;}

.links{
  color: #fff;
  text-decoration: none;
  box-shadow: inset 0 -3px 0 rgba(83, 109, 254, 1);
}
</style>
