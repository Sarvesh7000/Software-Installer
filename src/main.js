import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Title from '@/components/Title.vue'
// Styles

// Icons
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-dark-mode'
    }
  }
})
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Title', Title)
app.mount('#app')
