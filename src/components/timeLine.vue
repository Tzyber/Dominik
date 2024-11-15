<template>
    <div>
      <!-- Horizontal Timeline (für große Bildschirme) -->
      <v-timeline
        v-if="isLargeScreen"
        direction="horizontal"
        align="start"
        class="mt-8"
      >
        <v-timeline-item :dot-color="'#ff0096b3'">
          <template v-slot:opposite>
            <div>
              <div class="text-h6">Selbstständig</div>
              <p>Selbstständig als Webdesigner und Entwickler</p>
            </div>
          </template>
          x - 2018
        </v-timeline-item>
  
        <v-timeline-item>
          <template v-slot:opposite>2018-2019</template>
          <div>
            <div class="text-h6">Mammut Media</div>
            <p>Webdesign und Entwicklung von Komponenten und Websites speziell für die Kunden.</p>
          </div>
        </v-timeline-item>
  
        <v-timeline-item :dot-color="'#ff0096b3'">
          <template v-slot:opposite>
            <div>
              <div class="text-h6">Docunite Gmbh</div>
              <p>Solution Developer (Webentwickler) für Docunite.</p>
            </div>
          </template>
          2020-2024
        </v-timeline-item>
      </v-timeline>
  
      <!-- Vertical Timeline (für kleine Bildschirme) -->
      <v-timeline
        v-else
        direction="vertical"
        align="start"
        class="mt-8"
      >
      <v-timeline-item :dot-color="'#ff0096b3'">
          <template v-slot:opposite>
            <div>
              <div class="text-h6">Selbstständig</div>
              <p>Selbstständig als Webdesigner und Entwickler</p>
            </div>
          </template>
          x - 2018
        </v-timeline-item>
  
        <v-timeline-item>
          <template v-slot:opposite>2018-2019</template>
          <div>
            <div class="text-h6">Mammut Media</div>
            <p>Webdesign und Entwicklung von Komponenten und Websites speziell für die Kunden.</p>
          </div>
        </v-timeline-item>
  
        <v-timeline-item :dot-color="'#ff0096b3'">
          <template v-slot:opposite >
            <div>
              <div class="text-h6">Docunite Gmbh</div>
              <p>Solution Developer (Webentwickler) für Docunite.</p>
            </div>
          </template>
          2020-2024
        </v-timeline-item>
      </v-timeline>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useDisplay } from 'vuetify';
  
  export default defineComponent({
    setup() {
      const { mdAndUp } = useDisplay();
      const isLargeScreen = computed(() => mdAndUp.value);
  
      return {
        isLargeScreen,
      };
    },
  });
  </script>
  