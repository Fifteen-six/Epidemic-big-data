import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import City from '../components/City.vue'
import View_display from '../views/View_display.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/City/:City',
    name: 'City',
    component: City,
    props: true
  },
  {
    path: '/View_display/:citys',
    name: 'View_display',
    component: View_display,
    props:true
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
