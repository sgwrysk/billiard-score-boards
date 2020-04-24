import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/materials/box100',
    name: 'Box100',
    component: () => import(/* webpackChunkName: "materials_box100" */ '../views/materials/Box100.vue')
  },
  {
    path: '/materials/kanji25',
    name: 'Kanji25',
    component: () => import(/* webpackChunkName: "materials_kanji25" */ '../views/materials/Kanji25.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
