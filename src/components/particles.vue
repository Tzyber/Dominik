<template>
  <div class="particles-background" v-if="particleVisible() == true">
      <div v-for="n in 10" :key="n"  :class="'particle'">
          </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const globalState = inject("globalState") as { particleVisible: boolean };
  
  function particleVisible() {
    return globalState.particleVisible
  }
  
  </script>