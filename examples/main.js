import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/demo.scss';
import demoBlock from './components/demo-block'
// 导入组件库
import {
  FeButton
} from '../lib'
Vue.config.productionTip = false

Vue.use(FeButton)
Vue.use(ElementUI)
Vue.component('demo-block', demoBlock)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
