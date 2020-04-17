import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import {
  FeButton
} from '../lib'
Vue.config.productionTip = false

Vue.use(FeButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
