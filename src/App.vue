<template>
  <div id="app">
    <Starfield v-if="appStore.particleVisible" />
    <Navigation />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/stores/app'
  import Starfield from '@/components/Starfield.vue'
  import Footer from '@/components/Footer.vue'

  const appStore = useAppStore()
</script>
