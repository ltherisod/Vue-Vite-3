import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index.js'
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { createPinia} from 'pinia'


const pinia = createPinia()
createApp(App).use(router).use(pinia).use(
    Vue3Toasity,
    {
      autoClose: 3000,
      // ...
    }).mount('#app')
