<template>
  <v-container>
    <section id="home" class="mb-4 section" style="position: relative; overflow: hidden;">

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
        <v-img :src="me" alt="Dominik's profile picture"></v-img>
      </v-avatar>
    </v-col>
  </v-row>
</section>
  <!-- Particle animation background -->
<div class="particles-background" v-if="particleVisible">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
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
      <hr  id="skills"/>
    </div>
    <div> 
    <h2 class="aboutMe mb-6 mt-6" >Skills</h2>
    <div class="custom-grid">
    <div v-for="n in skills" :key="n.name"  :class="'custom-card'">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="custom-svg top-left">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="custom-svg bottom-left">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="custom-svg top-right">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="custom-svg bottom-right">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
      </svg>
      <div  style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%;">
      <p>{{ n.name }}</p>
      <div class="image-container mt-3">
      <v-img :src="n.image" max-width="100" max-height="100"></v-img>
    </div>
      </div>
    </div>
  </div>
</div>
  <hr class="mt-6" />


    <!-- Projects section -->
<section id="projects" class="mb-16 section">
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
            <div class="mt-2"> <p><a class="links" href="https://github.com/Tzyber/netflix-clone/tree/main" target="_blank">Check Demo Here</a></p> or<p><a class="links" href="https://github.com/Tzyber/netflix-clone" target="_blank">Check Code Here</a></p></div>
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
import vue from "@/assets/pngegg.png"
import typescript from "@/assets/ts.png"
import css from "@/assets/css.png"
import git from "@/assets/git.png"
import npm from "@/assets/npm.png"
import vuetify from "@/assets/vuetify2.png"
import me from '@/assets/me.png';

const route = useRoute(); 
const globalState = inject("globalState") as { particleVisible: boolean };
const particleVisible = computed(() => globalState.particleVisible);
const skills = [
  { name: "Vue.js", image: vue },
  { name: "Typescript", image: typescript},
  { name: "Css", image: css },
  { name: "Git", image: git },
  { name: "Npm", image: npm },
  { name: "Vuetify", image: vuetify }
];


onMounted(() => {
  const cards = document.querySelectorAll('.custom-card');

  cards.forEach(card => {
    // Element ist ein HTML-Element 
    const cardElement = card as HTMLElement;

    cardElement.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = cardElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Verwendung einer  CSS-Variable für die Position des "Spotlight"
      cardElement.style.setProperty('--mouse-x', `${x}px`);
      cardElement.style.setProperty('--mouse-y', `${y}px`);
    });

    cardElement.addEventListener('mouseleave', () => {
      // Entfernen des  Effekt beim Verlassen des Elements
      cardElement.style.setProperty('--mouse-x', `-9999px`);
      cardElement.style.setProperty('--mouse-y', `-9999px`);
    });
  });
});


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
  box-shadow: inset 0 -3px 0 #536dfe;
}

.custom-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.custom-card {
  position: relative;
  display: flex;
  height: 13rem;
  width: 100%;
  max-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;

  transition: all 0.3s ease-in-out;


  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.2);
  }
  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.2);
  }

   p {
    position: relative;
    z-index: 2;
  }
}
.custom-card::before {
  content: "";
  position: absolute;
  top: var(--mouse-y, 50%);
  left: var(--mouse-x, 50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(83, 109, 254, 0.6) 10%, transparent 60%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.custom-card:hover::before {
  opacity: 0.5; /* Effekt beim Hover anzeigen */
}

.image-container {
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;
}

.custom-card:hover .image-container {
  opacity: .4;
}


.custom-svg {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  color: black;

  @media (prefers-color-scheme: dark) {
    color: white;
  }

  &.top-left {
    top: -0.75rem;
    left: -0.75rem;
  }

  &.bottom-left {
    bottom: -0.75rem;
    left: -0.75rem;
  }

  &.top-right {
    top: -0.75rem;
    right: -0.75rem;
  }

  &.bottom-right {
    bottom: -0.75rem;
    right: -0.75rem;
  }
}

.particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
}

.particles-background .particle {
  position: absolute;
  width: 5px;
  height: 5px;
  background: rgba(83, 109, 254, 0.8);
  border-radius: 50%;
  animation: move 5s linear infinite;
  opacity: 0;
}


.particles-background .particle:nth-child(1) {
  top: 10%;
  left: 30%;
  animation-delay: 0s;
  animation-duration: 5s;
}

.particles-background .particle:nth-child(2) {
  top: 20%;
  left: 50%;
  animation-delay: 1s;
  animation-duration: 4s;
}

.particles-background .particle:nth-child(3) {
  top: 30%;
  left: 80%;
  animation-delay: 1.5s;
  animation-duration: 3.5s;
}

.particles-background .particle:nth-child(4) {
  top: 40%;
  left: 10%;
  animation-delay: 0.8s;
  animation-duration: 3s;
}

.particles-background .particle:nth-child(5) {
  top: 50%;
  left: 60%;
  animation-delay: 2s;
  animation-duration: 2.5s;
}

.particles-background .particle:nth-child(6) {
  top: 60%;
  left: 40%;
  animation-delay: 2.5s;
  animation-duration: 2s;
}

.particles-background .particle:nth-child(7) {
  top: 70%;
  left: 20%;
  animation-delay: 1s;
  animation-duration: 4.5s;
}

.particles-background .particle:nth-child(8) {
  top: 80%;
  left: 75%;
  animation-delay: 1.5s;
  animation-duration: 5s;
}

@keyframes move {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}


</style>
