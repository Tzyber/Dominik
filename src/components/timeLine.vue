<template>
  <div>
    <v-timeline
      class="mt-8"
      :direction="isLargeScreen ? 'horizontal' : 'vertical'"
    >
      <v-timeline-item
        v-for="(event, index) in timelineEvents"
        :key="index"
        :dot-color="event.color"
      >
        <template #opposite>
          <div>
            <div class="text-h6">{{ event.title }}</div>
            <p>{{ event.description }}</p>
          </div>
        </template>
        {{ event.date }}
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useDisplay } from 'vuetify'

  export default defineComponent({
    setup () {
      const { mdAndUp } = useDisplay()
      const isLargeScreen = computed(() => mdAndUp.value)

      const timelineEvents = [
        {
          title: 'Selbstständig',
          description: 'Selbstständig als Webdesigner und Entwickler',
          date: 'x - 2018',
          color: '#ff0096b3',
        },
        {
          title: 'Mammut Media',
          description: 'Webdesign und Entwicklung von Komponenten und Websites speziell für die Kunden.',
          date: '2018-2019',
          color: 'primary',
        },
        {
          title: 'Docunite Gmbh',
          description: 'Solution Developer (Webentwickler) für Docunite.',
          date: '2020-2024',
          color: '#ff0096b3',
        },
        {
          title: 'Umschulung',
          description: 'Umschulung zum Fachinformatiker in Anwendungsentwicklung',
          date: '2025',
          color: 'primary',
        },
        {
          title: 'Zertifizierung',
          description: 'SAP Foundation Level',
          date: '2025',
          color: '#ff0096b3',
        },
      ]

      return {
        isLargeScreen,
        timelineEvents,
      }
    },
  })
</script>

<style scoped>

</style>
