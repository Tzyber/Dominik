<template>
  <v-footer class="d-flex flex-column text-center w-100" style="background: rgba(0, 0, 0, 0.3) !important; backdrop-filter: blur(5px); border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="px-4 py-2 w-100">
      <p class="text-caption mb-2 text-white">Diese Webseite dient als persönliches Portfolio und Bewerbungsunterlage.</p>

      <v-divider class="mb-2" style="border-color: rgba(255, 255, 255, 0.2);" />

      <div class="d-flex justify-center ga-4">
        <router-link class="text-decoration-none text-white text-caption hover-glow" to="/impressum">Impressum</router-link>
        <span class="text-caption text-white">|</span>
        <router-link class="text-decoration-none text-white text-caption hover-glow" to="/datenschutz">Datenschutz</router-link>
      </div>

      <div class="mt-2 text-caption text-grey">
        {{ new Date().getFullYear() }} — <strong class="text-white">Dominik Dörrier</strong>
      </div>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
  // Footer component
</script>

<style scoped>
/* Optional styling */
</style>
