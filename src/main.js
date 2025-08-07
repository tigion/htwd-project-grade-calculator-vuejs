import './assets/css/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.app-dark-mode'
    }
  }
})

app.mount('#app')
