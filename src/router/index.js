import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import filmRouter from '@/router/routes/film.js'
import cinema from '@/router/routes/cinema.js'
import center from '@/router/routes/center.js'
const routes = [
  {
    path: '/',
    redirect:'/film'
  },
  filmRouter,
  cinema,
  center,
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import( '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router