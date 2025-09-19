<template>
  <v-app-bar app :elevation="2" fixed>
    <v-app-bar-title>Dominik Dörrier</v-app-bar-title>

    <v-btn
      v-for="item in items"
      :key="item.id"
      :to="{ path: '/', hash: `#${item.id}` }"
    >
      {{ item.title }}
    </v-btn>
    <v-switch
      color="#536dfe"
      :model-value="appStore.particleVisible"
      style="display: flex;"
      @change="appStore.toggleParticles"
    />
    <span class="ml-2">{{ appStore.particleVisible ? 'Particles ' : 'Particles' }}</span>

  </v-app-bar>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  import { ref } from 'vue'

  const appStore = useAppStore()

  const items = ref([
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
    { title: 'Impressum', id: 'impressum' },
  ])
</script>

<style>
.v-btn__overlay{
  opacity: 0 !important;
}
</style>
