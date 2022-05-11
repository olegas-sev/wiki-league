import { createApp } from 'vue'
import App from './App.vue'
// Dependencies
import router from './router'
import { createPinia } from 'pinia'
// Tailwind
import '@/assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
