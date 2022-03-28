import { createApp } from 'vue'
import App from './App.vue'
import * as component from 'ptest-ui'

const app = createApp(App)
Object.keys(component).forEach(com => {
  app.use(component[com])
})

app.mount('#play')


// 单独引入
// import { PLink } from 'ptest-ui'
// app.use(PLink)
