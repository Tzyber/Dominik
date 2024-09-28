<template>

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

</template>

<script setup lang="ts">
import vue from "@/assets/pngegg.png"
import typescript from "@/assets/ts.png"
import css from "@/assets/css.png"
import git from "@/assets/git.png"
import npm from "@/assets/npm.png"
import vuetify from "@/assets/vuetify2.png"
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
</script>