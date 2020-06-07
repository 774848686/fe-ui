import Vue from 'vue';
import Installation from '../docs/Installation.md';
import Button from '../docs/button.md'
import VueRouter from 'vue-router';
const routes = [
  {
    path: '/',
    component: Installation,
    name: 'default'
  },
  {
    path: '/guide/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/guide/button',
    name: 'Button',
    component: Button
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
