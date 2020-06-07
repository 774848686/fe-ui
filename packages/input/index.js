import FeButton from './src/button.vue'
// 为组件提供 install 安装方法，供按需引入
FeButton.install = function (Vue) {
  Vue.component(FeButton.name, FeButton)
}
export default FeButton
