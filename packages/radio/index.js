import FeRadio from './src/radio.vue'
// 为组件提供 install 安装方法，供按需引入
FeRadio.install = function (Vue) {
  Vue.component(FeRadio.name, FeRadio)
}
export default FeRadio
