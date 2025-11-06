import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/RegisterPage.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'

const routes = [
  { path: '/', redirect: '/login' }, // redirect root to login
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/products', component: Products },
  { path: "/cart", component: Cart }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
