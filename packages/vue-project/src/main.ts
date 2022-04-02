// import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@unocss/reset/tailwind.css'
import 'virtual:windi.css'
import '@/assets/css/index.css'

createApp(App).use(router).use(createPinia()).mount('#app')
