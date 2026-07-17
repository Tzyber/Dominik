<template>
  <div class="skills-grid">
    <div v-for="skill in skills" :key="skill.name" class="skill">
      <span class="corner tl" /><span class="corner tr" />
      <span class="corner bl" /><span class="corner br" />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <span aria-hidden="true" class="logo-wrap" v-html="skill.icon" />
      <span class="name">{{ skill.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const ICONS: Record<string, string> = {
    vue: '<svg class="logo" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0z"/><path fill="#35495E" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0z"/></svg>',
    ts: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect width="256" height="256" rx="24" fill="#3178C6"/><path fill="#fff" d="M150 130v-20h-84v20h30v78h24v-78zM165 205q9 5 22 5 12 0 21-4t14-11 5-17q0-9-4-15t-15-11l-13-5q-6-2-9-5t-2-6q0-4 3-6t8-2q11 0 20 7l10-15q-6-5-14-7t-16-2q-11 0-19 4t-13 10-5 16q0 10 6 16t16 10l12 5q6 2 8 5t3 6q0 4-4 6t-9 2q-13 0-23-9z"/></svg>',
    rust: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#DEA584"><circle cx="128" cy="128" r="36" fill="none" stroke="#DEA584" stroke-width="14"/><circle cx="128" cy="128" r="9"/><rect x="120" y="18" width="16" height="30" rx="3"/><rect x="120" y="208" width="16" height="30" rx="3"/><rect x="18" y="120" width="30" height="16" rx="3"/><rect x="208" y="120" width="30" height="16" rx="3"/><rect x="46" y="46" width="16" height="30" rx="3" transform="rotate(-45 54 61)"/><rect x="194" y="46" width="16" height="30" rx="3" transform="rotate(45 202 61)"/><rect x="46" y="180" width="16" height="30" rx="3" transform="rotate(45 54 195)"/><rect x="194" y="180" width="16" height="30" rx="3" transform="rotate(-45 202 195)"/></g></svg>',
    tauri: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="104" cy="132" r="58" fill="none" stroke="#24C8DB" stroke-width="22"/><circle cx="170" cy="96" r="26" fill="#FFC131"/></svg>',
    pinia: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><ellipse cx="128" cy="152" rx="56" ry="70" fill="#FFD859"/><path fill="#83B884" d="M128 22c13 17 13 39 0 56-13-17-13-39 0-56zM94 48c17 9 27 27 25 48-19-6-33-23-25-48zm68 0c8 25-6 42-25 48-2-21 8-39 25-48z"/><path stroke="#C99A2E" stroke-width="4" stroke-linecap="round" d="M106 124l44 44M150 124l-44 44" opacity=".5"/></svg>',
    vitest: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#729B1B" d="M150 20L58 148h58l-18 88 108-152h-66z"/></svg>',
    node: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#539E43" d="M128 16l104 60v104l-104 60L24 180V76z"/><path fill="#fff" d="M132 92c-22 0-35 10-35 27 0 19 15 23 32 27 13 3 17 5 17 10 0 4-4 7-13 7-11 0-17-4-19-12l-17 7c4 14 17 21 36 21 23 0 36-12 36-28 0-18-15-23-32-27-13-3-17-4-17-9 0-4 4-6 11-6 9 0 14 3 16 10l17-7c-5-13-16-20-33-20z"/></svg>',
    css: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#264DE4" d="M48 226l-16-184h192l-16 184-80 22z"/><path fill="#2965F1" d="M128 46v186l64-18 14-168z"/><path fill="#EBEBEB" d="M128 118h-33l-2-26h35V66H62l7 78h59zm0 66-27-8-2-20H72l3 34 53 15z"/><path fill="#fff" d="M128 118v26h30l-3 30-27 8v27l53-15 7-78h-60zm0-52v26h64l2-26z"/></svg>',
    git: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#F03C2E" d="M251 116L140 5a15 15 0 00-22 0L94 29l30 30a18 18 0 0123 23l29 29a18 18 0 11-11 10l-27-27v70a18 18 0 11-15-1V93a18 18 0 01-10-24L84 40 5 118a15 15 0 000 22l111 111a15 15 0 0022 0l115-114a15 15 0 00-2-21z"/></svg>',
    ai: '<svg class="logo" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#7C8CFF" stroke-width="10" stroke-linecap="round" d="M70 78l58 42M70 178l58-58M128 120l58-24M128 120l58 68"/><circle cx="70" cy="78" r="20" fill="#7C8CFF"/><circle cx="70" cy="178" r="20" fill="#7C8CFF" opacity=".75"/><circle cx="128" cy="120" r="24" fill="#4FD6C4"/><circle cx="186" cy="96" r="16" fill="#7C8CFF" opacity=".75"/><circle cx="186" cy="188" r="16" fill="#7C8CFF"/><path fill="#FF5C9A" d="M206 34l7 17 17 7-17 7-7 17-7-17-17-7 17-7z"/></svg>',
  }

  const skills = [
    { name: 'Vue.js', icon: ICONS.vue },
    { name: 'TypeScript', icon: ICONS.ts },
    { name: 'Rust', icon: ICONS.rust },
    { name: 'Tauri', icon: ICONS.tauri },
    { name: 'Pinia', icon: ICONS.pinia },
    { name: 'Vitest', icon: ICONS.vitest },
    { name: 'Node.js', icon: ICONS.node },
    { name: 'CSS / SCSS', icon: ICONS.css },
    { name: 'Git', icon: ICONS.git },
    { name: 'AI-assisted Dev', icon: ICONS.ai },
  ]
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
}

.skill {
  position: relative;
  background: var(--panel);
  border: 1px solid var(--hairline);
  border-radius: 14px;
  padding: 26px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  transition: transform 0.25s, border-color 0.25s, background 0.25s;
}

.skill:hover {
  transform: translateY(-4px);
  border-color: var(--signal);
  background: var(--panel-2);
}

.logo-wrap {
  display: flex;
}

.skill :deep(svg.logo) {
  width: 42px;
  height: 42px;
  opacity: 0.92;
}

.name {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  color: var(--ink-dim);
}

.skill:hover .name {
  color: var(--ink);
}

.corner {
  position: absolute;
  width: 11px;
  height: 11px;
  border: 1.5px solid var(--signal);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.skill:hover .corner {
  opacity: 0.8;
  transform: translate(0, 0);
}

.corner.tl { top: 8px; left: 8px; border-right: 0; border-bottom: 0; transform: translate(3px, 3px); }
.corner.tr { top: 8px; right: 8px; border-left: 0; border-bottom: 0; transform: translate(-3px, 3px); }
.corner.bl { bottom: 8px; left: 8px; border-right: 0; border-top: 0; transform: translate(3px, -3px); }
.corner.br { bottom: 8px; right: 8px; border-left: 0; border-top: 0; transform: translate(-3px, -3px); }
</style>
