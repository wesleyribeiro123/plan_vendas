import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/clients',
    name: 'Clientes',
    component: () => import('../views/clients.vue')
  },
  {
    path: '/debts',
    name: 'Despesas',
    component: () => import('../views/debts.vue')
  },
  {
    path: '/nets',
    name: 'Sociais',
    component: () => import('../views/nets.vue')
  },
  {
    path: '/orders',
    name: 'Pedidos',
    component: () => import('../views/orders.vue')
  },
  {
    path: '/sells',
    name: 'Vendas',
    component: () => import('../views/sells.vue')
  },
  {
    path: '/warehouse',
    name: 'Estoque',
    component: () => import('../views/warehouse.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
