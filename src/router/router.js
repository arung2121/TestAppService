import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/RegisterPage.vue'

const routes = [
  { path: '/', redirect: '/login' }, // redirect root to login
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
