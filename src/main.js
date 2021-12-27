import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import auth from './auth/index'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$auth = auth
auth
  .initialize()
  .then(() => {})
  .catch(console.error)
  .finally(() => {
    app.mount('#app')
  })
