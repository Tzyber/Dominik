<template>
  <v-app-bar app :elevation="2" fixed>
    <v-app-bar-nav-icon
      v-if="mobile"
      @click="drawer = !drawer"
    />

    <v-app-bar-title class="flex-grow-0 mr-4 app-title">
      <span class="title-full">Dominik Dörrier</span>
      <span class="title-short">DD</span>
    </v-app-bar-title>

    <v-spacer />

    <template v-if="!mobile">
      <v-btn
        v-for="item in items"
        :key="item.id"
        exact
        :to="{ path: '/', hash: `#${item.id}` }"
      >
        {{ item.title }}
      </v-btn>

      <v-btn
        class="particle-toggle-btn"
        :color="appStore.particleVisible ? 'primary' : 'default'"
        variant="outlined"
        @click="appStore.toggleParticles"
      >
        <v-icon start>{{ appStore.particleVisible ? 'mdi-weather-partly-cloudy' : 'mdi-weather-night' }}</v-icon>
        Particles
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.id"
        :to="{ path: '/', hash: `#${item.id}` }"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-list-item @click="appStore.toggleParticles">
        <template #prepend>
          <v-icon>{{ appStore.particleVisible ? 'mdi-weather-partly-cloudy' : 'mdi-weather-night' }}</v-icon>
        </template>
        <v-list-item-title>Particles {{ appStore.particleVisible ? 'ON' : 'OFF' }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list-item to="/impressum" @click="drawer = false">
        <v-list-item-title>Impressum</v-list-item-title>
      </v-list-item>
      <v-list-item to="/datenschutz" @click="drawer = false">
        <v-list-item-title>Datenschutz</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify'

  const appStore = useAppStore()
  const { mobile } = useDisplay()
  const drawer = ref(false)

  const items = ref([
    { title: 'Home', id: 'home' },
    { title: 'About', id: 'about' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
  ])
</script>

<style scoped>

.app-title {
  overflow: visible;
}
.title-short {
  display: none;
}

/* Navigation Button Hover Animation */
:deep(.v-btn) {
  position: relative;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
}
.v-btn--variant-text .v-btn__overlay{
  background-color: transparent !important;
}

:deep(.v-btn:not(.particle-toggle-btn):hover) {
  border-bottom-color: rgba(83, 109, 254, 0.8);
  box-shadow: 0 4px 12px rgba(83, 109, 254, 0.4),
              inset 0 -2px 8px rgba(83, 109, 254, 0.3);
  transform: translateY(-2px);
}

:deep(.v-btn:not(.particle-toggle-btn):active) {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(83, 109, 254, 0.3);
}

.particle-toggle-btn {
  margin-left: 1rem;
  border: 1px solid currentColor;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.particle-toggle-btn:hover {
  box-shadow: 0 0 20px rgba(255, 0, 150, 0.6),
              0 0 40px rgba(83, 109, 254, 0.4),
              inset 0 0 10px rgba(255, 0, 150, 0.2);
  transform: translateY(-2px) scale(1.05);
  border-color: rgba(255, 0, 150, 0.8);
}

.particle-toggle-btn:active {
  transform: translateY(0) scale(1);
  box-shadow: 0 0 10px rgba(255, 0, 150, 0.4);
}

.particle-toggle-btn :deep(.v-btn__overlay) {
  opacity: 0.08 !important;
}

@media (max-width: 400px) {
  .title-full {
    display: none;
  }

  .title-short {
    display: inline;
  }
}
</style>
