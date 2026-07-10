<template>
  <canvas
    ref="canvas"
    aria-hidden="true"
    class="starfield"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Wie viele Sterne maximal gezeichnet werden */
const MAX_STARS = 220

/** Je größer die Zahl, desto WENIGER Sterne (Pixel pro Stern) */
const PIXELS_PER_STAR = 9000

/** Sterngröße in Pixeln: zufällig zwischen MIN und MAX */
const STAR_RADIUS_MIN = 0.01
const STAR_RADIUS_MAX = 1.04

/** Funkel-Tempo: Helligkeitsänderung pro Frame, zufällig zwischen MIN und MAX.
 *  Kleinere Werte = langsameres Glimmen. */
const TWINKLE_SPEED_MIN = 0.0001
const TWINKLE_SPEED_MAX = 0.008

/** Helligkeit pendelt zwischen diesen beiden Werten (0 = unsichtbar, 1 = voll).
 *  BRIGHTNESS_MIN höher setzen = Sterne dimmen nie ganz weg → wirkt ruhiger. */
const BRIGHTNESS_MIN = 0.4
const BRIGHTNESS_MAX = 1

/** Farbanteile: 10 % blau, davon abgesehen 15 % pink, der Rest weiß */
const COLOR_BLUE = '124,140,255'
const COLOR_PINK = '255,92,154'
const COLOR_WHITE = '234,236,246'
const CHANCE_BLUE = 0.1
const CHANCE_PINK = 0.15

/** Feste Helligkeit */
const REDUCED_MOTION_BRIGHTNESS = 0.7

interface Star {
  x: number
  y: number
  radius: number
  brightness: number
  twinkleSpeed: number // Vorzeichen bestimmt die Richtung: + heller, − dunkler
  color: string
}

const canvas = ref<HTMLCanvasElement | null>(null)
let animationFrameId = 0
let stars: Star[] = []
let canvasWidth = 0
let canvasHeight = 0

const prefersReducedMotion = typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const randomBetween = (min: number, max: number): number =>
  min + Math.random() * (max - min)

const pickColor = (): string => {
  if (Math.random() < CHANCE_BLUE) return COLOR_BLUE
  if (Math.random() < CHANCE_PINK) return COLOR_PINK
  return COLOR_WHITE
}

/** Erzeugt die Sterne neu, passend zur aktuellen Fenstergröße */
const createStars = (): void => {
  const canvasElement = canvas.value
  if (!canvasElement) return

  canvasWidth = canvasElement.width = window.innerWidth
  canvasHeight = canvasElement.height = window.innerHeight

  const starCount = Math.min(
    MAX_STARS,
    Math.floor((canvasWidth * canvasHeight) / PIXELS_PER_STAR)
  )

  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: randomBetween(STAR_RADIUS_MIN, STAR_RADIUS_MAX),
    // WICHTIG : Start-Helligkeit muss innerhalb der Pendel-Grenzen
    // liegen. Startet ein Stern darunter, flippt die Richtung sonst jeden
    // Frame hin und her und der Stern zittert, statt langsam zu pulsieren.
    brightness: randomBetween(BRIGHTNESS_MIN, BRIGHTNESS_MAX),
    twinkleSpeed: randomBetween(TWINKLE_SPEED_MIN, TWINKLE_SPEED_MAX),
    color: pickColor()
  }))
}

/** Zeichnet einen Frame und plant den nächsten */
const drawFrame = (): void => {
  const canvasElement = canvas.value
  const ctx = canvasElement?.getContext('2d')
  if (!canvasElement || !ctx) return

  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  for (const star of stars) {
    if (!prefersReducedMotion) {
      star.brightness += star.twinkleSpeed
      // An den Grenzen die Richtung umkehren (heller <-> dunkler)
      if (star.brightness > BRIGHTNESS_MAX || star.brightness < BRIGHTNESS_MIN) {
        star.twinkleSpeed *= -1
      }
    }

    const alpha = prefersReducedMotion ? REDUCED_MOTION_BRIGHTNESS : star.brightness
    ctx.beginPath()
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${star.color},${alpha.toFixed(2)})`
    ctx.fill()
  }

  if (!prefersReducedMotion) {
    animationFrameId = requestAnimationFrame(drawFrame)
  }
}

const handleResize = (): void => {
  createStars()
  // Bei reduzierter Bewegung läuft kein Loop — also einmal manuell zeichnen
  if (prefersReducedMotion) drawFrame()
}

onMounted(() => {
  // Schutz gegen doppelte Loops (z. B. nach Vite-Hot-Reload):
  // erst einen eventuell noch laufenden Frame abbrechen, dann starten
  cancelAnimationFrame(animationFrameId)
  createStars()
  drawFrame()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.starfield {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
</style>
