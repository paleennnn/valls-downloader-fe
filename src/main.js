import './styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const savedLang = localStorage.getItem('lang')
if (savedLang) {
  i18n.global.locale.value = savedLang
}

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')