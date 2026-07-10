<template>
  <div
    aria-hidden="true"
    class="nebula"
  >
    <div class="core" />
    <div class="gas" />
    <canvas
      ref="orbitCanvas"
      class="orbits"
      height="280"
      width="280"
    />
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const orbitCanvas = ref<HTMLCanvasElement | null>(null)
let raf = 0

onMounted(() => {
  const cv = orbitCanvas.value
  if (!cv) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const size = 280
  cv.width = size * dpr
  cv.height = size * dpr
  const x = cv.getContext('2d')
  if (!x) return
  x.scale(dpr, dpr)
  const cx = size / 2
  const cy = size / 2
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const parts = [
    { r: 120, a: 0.5, sp: 0.0055, col: '79,214,196' },
    { r: 98, a: 3.3, sp: -0.009, col: '124,140,255' }
  ]

  const dot = (px: number, py: number, col: string): void => {
    const g = x.createRadialGradient(px, py, 0, px, py, 8)
    g.addColorStop(0, `rgba(${col},.9)`)
    g.addColorStop(1, `rgba(${col},0)`)
    x.fillStyle = g
    x.beginPath()
    x.arc(px, py, 8, 0, 7)
    x.fill()
    x.fillStyle = `rgba(${col},1)`
    x.beginPath()
    x.arc(px, py, 2.4, 0, 7)
    x.fill()
  }

  const frame = (): void => {
    x.clearRect(0, 0, size, size)
    for (const p of parts) {
      if (!reduce) p.a += p.sp
      dot(cx + Math.cos(p.a) * p.r, cy + Math.sin(p.a) * p.r, p.col)
    }
    if (!reduce) raf = requestAnimationFrame(frame)
  }
  frame()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
})
</script>

<style scoped>
.nebula {
  width: 150px;
  height: 150px;
  margin: 0 auto 40px;
  position: relative;
  border-radius: 50%;
}

.core {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 42% 40%, #ffe1f0 0%, #ff4d93 18%, #e5178a 42%, #7b1e8f 68%, #241056 88%, transparent 100%);
  box-shadow: 0 0 40px rgba(255, 77, 147, 0.55), 0 0 90px rgba(229, 23, 138, 0.45), 0 0 150px rgba(124, 60, 180, 0.35);
}

.gas {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  opacity: 0.85;
  background:
    radial-gradient(circle at 63% 28%, rgba(255, 175, 215, 0.6), transparent 40%),
    radial-gradient(circle at 28% 66%, rgba(165, 80, 225, 0.55), transparent 46%),
    radial-gradient(circle at 48% 52%, rgba(255, 100, 170, 0.25), transparent 60%);
}

.orbits {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 280px;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
