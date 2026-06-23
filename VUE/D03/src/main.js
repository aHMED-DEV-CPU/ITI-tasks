import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import routes from './router'
import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(store).use(router).mount('#app')
