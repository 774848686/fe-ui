import FeInput from './src/input.vue'
// 为组件提供 install 安装方法，供按需引入
FeInput.install = function (Vue) {
  Vue.component(FeInput.name, FeInput)
}
export default FeInput
