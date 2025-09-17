<template>
  <v-app id="app">

    <vue-particles
        v-if="particleVisible()"
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        v-bind:options="particlesOptions"
    />
    <v-main>
      <Navigation />
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { loadSlim } from "tsparticles-slim";
  import { particlesOptions } from "./particle-options";
  import type { Engine } from "tsparticles-engine";

  const globalState = inject("globalState") as { particleVisible: boolean };
  
  function particleVisible() {
    return globalState.particleVisible
  }


  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
  };

</script>

<style>
/* Stelle sicher, dass die Partikel im Hintergrund bleiben */
#tsparticles {

  z-index: 0;
}
</style>
