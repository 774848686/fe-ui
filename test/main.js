import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import FeUI from '../packages'

Vue.config.productionTip = false

Vue.use(FeUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
