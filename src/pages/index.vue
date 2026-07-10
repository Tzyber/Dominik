<template>
  <div>
    <!-- HERO -->
    <section id="home" class="hero">
      <div class="moon" aria-hidden="true" />
      <div class="wrap hero-grid">
        <div>
          <div class="telemetry">MISSION LOG · <b>51.26°N 7.15°E</b> · WUPPERTAL, DE</div>
          <div aria-hidden="true" class="typed">
            <span>{{ typedText }}</span><span class="cursor">▋</span>
          </div>
          <h1>Dominik<br>Dörrier</h1>
          <p class="role">
            <strong>Web Developer.</strong> I build modern, responsive web applications
            with <span class="mark">TypeScript</span>, <span class="mark">Vue</span> &amp; <span class="mark">Vuetify</span>.
          </p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#projects" @click.prevent="scrollToSection('projects')">View projects</a>
          </div>
        </div>
        <div class="porthole">
          <div class="ring outer" />
          <div class="ring" />
          <div class="disc">
            <img alt="Portrait of Dominik Dörrier" class="figure" :src="me">
          </div>
          <div class="tag">DÖRRIER · DEV-01</div>
        </div>
      </div>
      <div class="scroll-hint">SCROLL</div>
    </section>

    <div class="wrap"><div class="divider" /></div>

    <!-- ABOUT -->
    <section id="about" class="block">
      <div class="wrap">
        <span class="eyebrow">01 — About</span>
        <h2 class="section-title">Signal from Wuppertal</h2>
        <div class="about-grid">
          <div>
            <p class="lede">
              Years of hands-on web work, now <em>retraining</em> as a Fachinformatiker
              for Anwendungsentwicklung — and still learning something new on every build.
            </p>
            <div class="about-body">
              <p>I care about clean, maintainable code and interfaces that feel considered rather than decorated. My stack centres on TypeScript, Vue and Vuetify, with a growing eye for tooling, testing and the parts of a project people never see.</p>
              <p>Before the retraining I worked as a freelance web designer and later as a solution developer — so I've shipped for real clients, not just for practice.</p>
            </div>
          </div>
          <TimeLine />
        </div>
      </div>
    </section>

    <div class="wrap"><div class="divider" /></div>

    <!-- SKILLS -->
    <section id="skills" class="block">
      <div class="wrap">
        <span class="eyebrow">02 — Toolkit</span>
        <h2 class="section-title">Instruments on board</h2>
        <skills />
      </div>
    </section>

    <div class="wrap"><div class="divider" /></div>

    <!-- PROJECTS -->
    <section id="projects" class="block">
      <div class="wrap">
        <span class="eyebrow">03 — Projects</span>
        <h2 class="section-title">Selected work</h2>
        <Projects />
      </div>
    </section>

    <div class="wrap"><div class="divider" /></div>

    <!-- OUTRO -->
    <section id="outro" class="block contact">
      <div class="wrap">
        <Nebula />
        <h2>Still building.</h2>
        <p>Web developer from Wuppertal — building for the web since 2018, with a lasting preference for clean, maintainable code.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import me from '@/assets/me.png'

const route = useRoute()

/* --- typewriter with rotating phrases --- */
const typedText = ref('')
const phrases = ['welcome to my portfolio', 'ts · vue · vuetify', 'clean code, considered UI']
let timer: ReturnType<typeof setTimeout> | undefined

const startTyping = (): void => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    typedText.value = phrases[0]
    return
  }
  let p = 0
  let i = 0
  let del = false
  const tick = (): void => {
    const cur = phrases[p]
    typedText.value = del ? cur.slice(0, i--) : cur.slice(0, i++)
    if (!del && i > cur.length) {
      del = true
      timer = setTimeout(tick, 1400)
      return
    }
    if (del && i < 0) {
      del = false
      p = (p + 1) % phrases.length
      i = 0
      timer = setTimeout(tick, 300)
      return
    }
    timer = setTimeout(tick, del ? 45 : 85)
  }
  tick()
}

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (route.hash) {
    scrollToSection(route.hash.slice(1))
  }
  startTyping()
})

onBeforeUnmount(() => {
  clearTimeout(timer)
})

watch(() => route.hash, newHash => {
  if (newHash) {
    scrollToSection(newHash.slice(1))
  }
})
</script>

<style >
/* ---------- hero ---------- */
.hero {
  min-height: min(84vh, 720px);
  display: flex;
  align-items: center;
  padding-top: 76px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.moon {
  position: absolute;
  top: 3.5rem;
  right: 40%;
  display: block;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-image: url('@/assets/2k_moon.jpg');
  background-repeat: repeat-x;
  background-size: 400% 100%;
  opacity: 1;
  animation: rotation 70s linear infinite;
  margin-left: 16px;
  will-change: background-position;
  backface-visibility: hidden;
  z-index: -1;
}

.moon::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: inset -10px 8px 6px -5px #ffffff,
  inset 20px -20px 40px 30px rgba(0, 0, 0, 0.9),
  7px -6px 14px rgba(255, 255, 255, 0.32);
  animation: lightsweep 60s linear infinite;
  will-change: transform;
}

@keyframes rotation {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
}

@keyframes lightsweep {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .moon { animation: none; }
  .moon::after { animation: none; }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
  width: 100%;
}

.telemetry {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  color: var(--ink-faint);
  margin-bottom: 16px;
  text-shadow: 0 0 6px var(--void), 0 0 12px var(--void), 0 1px 3px var(--void);
}

.telemetry b {
  color: var(--aurora-teal);
  font-weight: 400;
}

.hero h1 {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  margin-bottom: 14px;
  color: var(--ink);
}

.role {
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  color: var(--ink-dim);
  max-width: 34ch;
}

.role strong {
  color: var(--ink);
  font-weight: 600;
}

.role .mark {
  color: var(--ink);
  font-weight: 600;
  background: linear-gradient(transparent 62%, var(--signal-soft) 62%);
  padding: 0 2px;
}

.typed {
  font-family: var(--font-mono);
  color: var(--signal);
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
  min-height: 1.4em;
  text-shadow: 0 0 6px var(--void), 0 0 12px var(--void), 0 1px 3px var(--void);
}

.cursor {
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.cta-row {
  display: flex;
  gap: 14px;
  margin-top: 34px;
  flex-wrap: wrap;
}

.porthole {
  position: relative;
  width: min(340px, 80%);
  aspect-ratio: 1;
  margin: 0 auto;
  user-select: none;
  pointer-events: none;
}

.ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid var(--hairline);
  box-shadow: 0 0 0 1px rgba(124, 140, 255, 0.08), inset 0 0 60px rgba(124, 140, 255, 0.1);
}

.ring.outer {
  inset: -18px;
  border-style: dashed;
  opacity: 0.5;
  animation: spin 60s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.disc {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  overflow: hidden;
  background: radial-gradient(120% 120% at 30% 20%, #2a3566 0%, #131836 45%, #0a0e1c 100%);
}

.disc .figure {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.porthole .tag {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  color: var(--ink-faint);
  background: rgba(5, 7, 15, 0.7);
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid var(--hairline);
  white-space: nowrap;
}

.scroll-hint {
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--ink-faint);
  text-transform: uppercase;
}

.scroll-hint::after {
  content: '';
  display: block;
  width: 1px;
  height: 34px;
  margin: 8px auto 0;
  background: linear-gradient(var(--signal), transparent);
}

/* ---------- about ---------- */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.lede {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(1.25rem, 2.3vw, 1.7rem);
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.lede em {
  font-style: normal;
  color: var(--signal);
}

.about-body {
  margin-top: 26px;
}

.about-body p {
  color: var(--ink-dim);
  margin-bottom: 16px;
  max-width: 46ch;
}

/* ---------- contact ---------- */
.contact {
  text-align: center;
}

.contact h2 {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  letter-spacing: -0.02em;
  color: var(--ink);
}

.contact p {
  color: var(--ink-dim);
  max-width: 44ch;
  margin: 14px auto 30px;
}

.contact-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ---------- responsive ---------- */
@media (max-width: 860px) {
  .scroll-hint {
    display: none;
  }

  .hero-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    gap: 40px;
  }

  .porthole {
    width: min(260px, 70%);
    order: -1;
  }
}
</style>
