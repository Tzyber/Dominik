<template>
  <v-app id="app">

    <vue-particles
      v-if="appStore.particleVisible"
      id="tsparticles"
      :options="particlesOptions"
      :particles-init="particlesInit"
    />
    <v-main>
      <Navigation />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import { loadSlim } from 'tsparticles-slim'
  import { particlesOptions } from './particle-options'
  import type { Engine } from 'tsparticles-engine'

  const appStore = useAppStore()

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }
</script>

<style>
/* Stelle sicher, dass die Partikel im Hintergrund bleiben */
#tsparticles {

  z-index: 0;
}
</style>
