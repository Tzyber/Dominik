<template>
  <v-app-bar :elevation="2" app fixed>
    <v-app-bar-title>Dominik Dörrier</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in items"
      :key="item.id"
      :to="{ path: '/', hash: `#${item.id}` }"
    >
      {{ item.title }}
    </v-btn>
    <v-switch style="display: flex;" color="#536dfe"  v-model="particleVisible"> </v-switch>
    <span class="ml-2" v-if="particleVisible === true"> Particles active.</span>
    <span class="ml-2" v-if="particleVisible === false"> Particles off</span>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue';

const globalState = inject('globalState') as { particleVisible: boolean };

if (!globalState) {
  throw new Error('Global state not found');
}

const particleVisible = ref(globalState.particleVisible);

watch(particleVisible, (newValue) => {
  globalState.particleVisible = newValue;
}, { immediate: true });

const items = ref([
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' }
]);
</script>

<style scoped>
</style>
