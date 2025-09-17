import { createApp, reactive } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles'; // <--  Engine

const app = createApp(App);
const localParticles = localStorage.getItem("localParticles") === "true";

const state = reactive({
  particleVisible: localParticles
});

app.provide("globalState", state);

app.use(Particles, {
  init: async engine => {
    await loadFull(engine);
  },
});

registerPlugins(app);
app.mount('#app');