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
    </v-app-bar>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
   { title: 'Projects', id: 'projects' },
  { title: 'Contact', id: 'contact' },
]);
</script>

<style scoped>
</style>