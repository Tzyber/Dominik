import { createApp } from 'vue'
import App from './App.vue'
import { registerPlugins } from '@/plugins'

// Global styles (design tokens, layout, base) — must load unscoped
import '@/styles/global.scss'

// Self-hosted fonts (no remote Google Fonts – GDPR)
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

const app = createApp(App)

registerPlugins(app)
app.mount('#app')
