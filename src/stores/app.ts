import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    particleVisible: localStorage.getItem('localParticles') === 'true',
  }),
  actions: {
    toggleParticles() {
      this.particleVisible = !this.particleVisible
      localStorage.setItem('localParticles', this.particleVisible.toString())
    },
  },
})

