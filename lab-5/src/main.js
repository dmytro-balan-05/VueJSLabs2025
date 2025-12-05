import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import App from './App.vue'
import CopyToClipboardPlugin from './plugins/copyToClipboard'
import './assets/main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.fake-dark-selector'
        }
    }
})
app.use(ToastService)
app.use(CopyToClipboardPlugin)

app.mount('#app')