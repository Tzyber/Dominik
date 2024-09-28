import { createApp, reactive } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';

const app = createApp(App);

// Create a global reactive state
const state = reactive({
  particleVisible: true
});

// Provide the global state to the app
app.provide("globalState", state);

registerPlugins(app);
app.mount('#app');
