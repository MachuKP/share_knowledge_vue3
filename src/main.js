import { createApp } from 'vue'
//--router--
import { router } from './router/index'
//--pinia--
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

//--pinia--
app.use(pinia)

//--router--
app.use(router)
app.mount('#app')
