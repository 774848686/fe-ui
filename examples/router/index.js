import Vue from 'vue';
import Installation from '../docs/Installation.md';
import VueRouter from 'vue-router';

let routersComp = [];
const requireComponent = require.context('../docs', false, /[a-z0-9]+\.(md)$/i)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const name = forMatPathName(fileName);
  routersComp.push({
    path: `/guide/${name.toLowerCase()}`,
    name: name,
    component: componentConfig.default
  })
});
function forMatPathName(filename) {
  return filename && filename.replace(/\.\/(.*)+\.md$/i, '$1')
}
const routes = [{
    path: '/',
    component: Installation,
    name: 'default'
  },
  ...routersComp
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default {
  router,
  routes
}
