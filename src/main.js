import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(createBootstrap())

app.mount('#app')
