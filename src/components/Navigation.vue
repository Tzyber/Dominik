<template>
  <header class="site-header">
    <nav class="site-nav">
      <router-link
        class="brand"
        to="/"
      >
        Dominik<span>.</span>Dörrier
      </router-link>

      <button
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        class="navtoggle"
        @click="menuOpen = !menuOpen"
      >
        MENU
      </button>

      <div
        :class="['links', { open: menuOpen }]"
        @click="onLinksClick"
      >
        <router-link
          v-for="item in items"
          :key="item.id"
          :to="{ path: '/', hash: `#${item.id}` }"
        >
          {{ item.title }}
        </router-link>

        <button
          :aria-pressed="appStore.particleVisible"
          class="stars-toggle"
          type="button"
          @click.stop="appStore.toggleParticles"
        >
          ✦ Stars {{ appStore.particleVisible ? 'on' : 'off' }}
        </button>

        <router-link
          class="legal-link"
          to="/impressum"
        >
          Impressum
        </router-link>
        <router-link
          class="legal-link"
          to="/datenschutz"
        >
          Datenschutz
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const menuOpen = ref(false)

const items = [
  { title: 'Home', id: 'home' },
  { title: 'About', id: 'about' },
  { title: 'Skills', id: 'skills' },
  { title: 'Projects', id: 'projects' }
]

const onLinksClick = (e: MouseEvent): void => {
  if ((e.target as HTMLElement).tagName === 'A') {
    menuOpen.value = false
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: linear-gradient(180deg, rgba(5, 7, 15, 0.82), rgba(5, 7, 15, 0.35));
  border-bottom: 1px solid var(--hairline);
}

.site-nav {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  font-size: 1.02rem;
  color: var(--ink);
  text-decoration: none;
}

.brand span {
  color: var(--signal);
}

.links {
  margin-left: auto;
  display: flex;
  gap: 6px;
  align-items: center;
}

.links a,
.stars-toggle {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink-dim);
  padding: 8px 12px;
  border-radius: 8px;
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.links a:hover,
.links a:focus-visible,
.stars-toggle:hover,
.stars-toggle:focus-visible {
  color: var(--ink);
  background: var(--signal-soft);
  outline: none;
}

.links a:focus-visible,
.stars-toggle:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 2px;
}

.legal-link {
  display: none;
}

.navtoggle {
  display: none;
}

@media (max-width: 860px) {
  .links {
    display: none;
  }

  .links.open {
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--deep);
    border-bottom: 1px solid var(--hairline);
    padding: 10px 20px 18px;
  }

  .links.open .stars-toggle {
    text-align: left;
  }

  .legal-link {
    display: block;
    border-top: 1px solid var(--hairline);
    margin-top: 6px;
    padding-top: 12px;
  }

  .legal-link + .legal-link {
    border-top: 0;
    margin-top: 0;
    padding-top: 8px;
  }

  .navtoggle {
    display: block;
    margin-left: auto;
    background: none;
    border: 1px solid var(--hairline);
    border-radius: 8px;
    color: var(--ink);
    padding: 8px 12px;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }
}
</style>
