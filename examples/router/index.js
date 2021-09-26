import Vue from 'vue';
import Installation from '../docs/Installation.md';
import Button from '../docs/button.md'
import Input from '../docs/input.md'
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
  },
  {
    path: '/guide/input',
    name: 'Input',
    component: Input
  },
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default {router,routes}
