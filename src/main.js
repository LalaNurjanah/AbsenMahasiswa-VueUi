import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './Store'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


createApp(App).use(Store).use(router).mount('#app')


