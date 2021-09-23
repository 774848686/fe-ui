/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import FeButton from './button'
import FeInput from './input'
const version = '0.0.49'
const components = [
  FeButton,
  FeInput
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })

};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  FeButton,
  FeInput
}
export default {
  install,
  version
}
