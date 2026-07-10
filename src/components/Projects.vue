<template>
  <div class="proj-grid">
    <article
      v-for="project in projects"
      :key="project.title"
      class="card project-card"
    >
      <div class="thumb">
        <span class="num">{{ project.num }}</span>
        <img
          :alt="project.title"
          loading="lazy"
          :src="project.image"
        >
      </div>
      <div class="body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tags">
          <span
            v-for="tag in project.tags"
            :key="tag"
          >{{ tag }}</span>
        </div>
        <div class="card-links">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            rel="noopener"
            target="_blank"
          >{{ link.text }} →</a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  import projectImage1 from '@/assets/twitchbot.jpeg'
  import projectImage2 from '@/assets/portfolio.jpeg'
  import projectImage3 from '@/assets/netflix.jpeg'

  const projects = [
    {
      num: 'P-01',
      title: 'Twitch Chat Bot',
      description: 'A Twitch chat bot that reacts to subscriptions, gifted subs and Bit cheers in real time and doubles as a quiz bot for the stream.',
      image: projectImage1,
      links: [
        { text: 'Code', url: 'https://github.com/Tzyber/twitchChatBot' },
      ],
      tags: ['JavaScript', 'Express'],
    },
    {
      num: 'P-02',
      title: 'Portfolio',
      description: 'This site. Built from scratch in Vue 3, Vuetify and TypeScript an evolving playground where new ideas land first.',
      image: projectImage2,
      links: [
        { text: 'Code', url: 'https://github.com/Tzyber/Dominik' },
      ],
      tags: ['TypeScript', 'Vue', 'Vuetify'],
    },
    {
      num: 'P-03',
      title: 'Netflix Clone',
      description: 'A Netflix UI recreation exploring layout, routing and responsive design across breakpoints.',
      image: projectImage3,
      links: [
        { text: 'Demo', url: 'https://tzyber.github.io/netflix-clone/' },
        { text: 'Code', url: 'https://github.com/Tzyber/netflix-clone' },
      ],
      tags: ['TypeScript', 'Tailwind', 'Vue'],
    },
  ]
</script>

<style scoped>
.proj-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--hairline);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-6px);
  border-color: var(--signal);
  box-shadow: 0 24px 50px -24px rgba(124, 140, 255, 0.4);
}

.thumb {
  aspect-ratio: 16 / 10;
  background: linear-gradient(135deg, #1a2247, #0b0f22);
  position: relative;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: opacity 0.3s, transform 0.4s;
}

.card:hover .thumb img {
  opacity: 1;
  transform: scale(1.03);
}

.thumb .num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--ink);
  position: absolute;
  top: 12px;
  left: 14px;
  z-index: 2;
  background: rgba(5, 7, 15, 0.65);
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid var(--hairline);
}

.body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card h3 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 8px;
  color: var(--ink);
}

.card p {
  color: var(--ink-dim);
  font-size: 0.92rem;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 16px 0 14px;
}

.tags span {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--ink-dim);
  border: 1px solid var(--hairline);
  padding: 4px 9px;
  border-radius: 20px;
}

.card-links {
  display: flex;
  gap: 16px;
}

.card-links a {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.06em;
  text-decoration: none;
  color: var(--signal);
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.2s;
}

.card-links a:hover {
  gap: 9px;
}

@media (max-width: 860px) {
  .proj-grid {
    grid-template-columns: 1fr;
  }
}
</style>
