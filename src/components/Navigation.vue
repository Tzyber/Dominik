<template>
  <v-app-bar app :elevation="2" fixed>
    <v-app-bar-nav-icon
      v-if="mobile"
      @click="drawer = !drawer"
    />

    <v-app-bar-title class="flex-grow-0 mr-4">Dominik Dörrier</v-app-bar-title>
    
    <v-spacer v-if="mobile" />

    <template v-if="!mobile">
      <v-btn
        v-for="item in items"
        :key="item.id"
        :to="{ path: '/', hash: `#${item.id}` }"
        exact
      >
        {{ item.title }}
      </v-btn>
    </template>

    <v-spacer v-if="!mobile" />

    <div class="d-flex align-center">
      <v-switch
        color="#536dfe"
        :model-value="appStore.particleVisible"
        hide-details
        inset
        @change="appStore.toggleParticles"
      />
      <span v-if="!mobile" class="ml-2">{{ appStore.particleVisible ? 'Particles ' : 'Particles' }}</span>
    </div>
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

<style>
.v-btn__overlay{
  opacity: 0 !important;
}
</style>
