import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Source from '../views/Source.vue'
import Use from '../views/Use.vue'
import Processing from '../views/Processing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/source/:name',
    name: 'Source',
    component: Source,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/use-the-data',
    name: 'Use',
    component: Use
  },
  {
    path: '/processing-pipeline',
    name: 'Processing',
    component: Processing
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
