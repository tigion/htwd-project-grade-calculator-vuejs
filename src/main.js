import './assets/css/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import ToggleButton from 'primevue/togglebutton'
import Select from 'primevue/select'

import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(PrimeVue, {
  // unstyled: true
  theme: {
    preset: Aura,
    options: {
      // prefix: 'p',
      // darkModeSelector: 'system',
      // cssLayer: true,
      // cssLayer: {
      //   name: 'primevue',
      //   order: 'tailwind-base, primevue, tailwind-utilities'
      // },
      // cssLayer: { name: 'primevue' }
      // cssLayer: { name: 'primeui', order: 'tailwind-base, primeui, primevue, tailwind-utilities;' }
      darkModeSelector: '.dark'
    }
  }
})

app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('ToggleButton', ToggleButton)
app.component('Select', Select)

app.mount('#app')
