import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Portraits from '../views/Portraits.vue'
import Couples from '../views/Couples.vue'
import Families from '../views/Families.vue'
import About from '../views/About.vue'
import Prices from '../views/Prices.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portraits',
    name: 'Portraits',
    component: Portraits
  },
  {
    path: '/couples',
    name: 'Couples',
    component: Couples
  },
  {
    path: '/families',
    name: 'Families',
    component: Families
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/prices',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
