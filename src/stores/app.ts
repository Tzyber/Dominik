import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Stars are on by default; only an explicit opt-out disables them.
    particleVisible: localStorage.getItem('localParticles') !== 'false',
  }),
  actions: {
    toggleParticles () {
      this.particleVisible = !this.particleVisible
      localStorage.setItem('localParticles', this.particleVisible.toString())
    },
  },
})
