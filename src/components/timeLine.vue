<template>
  <div class="timeline">
    <div
      v-for="event in timelineEvents"
      :key="event.title"
      :class="['tl-item', { now: event.now }]"
    >
      <div class="tl-date">
        {{ event.date }}
      </div>
      <div class="tl-title">
        {{ event.title }}
      </div>
      <div class="tl-desc">
        {{ event.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const timelineEvents = [
    {
      title: 'Freelance',
      description: 'Self-employed as web designer & developer.',
      date: '— 2018',
      now: false,
    },
    {
      title: 'Mammut Media',
      description: 'Web design and component/site development for clients.',
      date: '2018 – 2019',
      now: false,
    },
    {
      title: 'Docunite GmbH',
      description: 'Solution Developer (web development).',
      date: '2020 – 2024',
      now: false,
    },
    {
      title: 'Umschulung',
      description: 'Fachinformatiker Anwendungsentwicklung.',
      date: '2025',
      now: true,
    },
    {
      title: 'Certification',
      description: 'SAP Foundation Level.',
      date: '2026',
      now: false,
    },
  ]
</script>

<style scoped>
.timeline {
  margin-top: 8px;
  border-left: 1px solid var(--hairline);
  padding-left: 26px;
}

.tl-item {
  position: relative;
  padding-bottom: 26px;
}

.tl-item:last-child {
  padding-bottom: 0;
}

.tl-item::before {
  content: '';
  position: absolute;
  left: -31px;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--deep);
  border: 1px solid var(--signal);
  box-shadow: 0 0 0 3px var(--void);
}

.tl-item.now::before {
  background: var(--signal);
  box-shadow: 0 0 12px var(--signal);
}

.tl-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--signal);
}

.tl-title {
  font-weight: 600;
  margin-top: 2px;
  color: var(--ink);
}

.tl-desc {
  color: var(--ink-faint);
  font-size: 0.9rem;
}
</style>
