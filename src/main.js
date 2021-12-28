import { createApp } from 'vue'
import { Router } from './router.js'
import { Auth } from './auth.js'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(Router)

// Make auth object global to access from anywhere
app.config.globalProperties.$auth = Auth

Auth
  .initialize()
  .then(() => {})
  .catch(console.error)
  .finally(() => {
    app.mount('#app')
  })
