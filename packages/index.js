/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import FeButton from './button'
import FeInput from './input'
import FeRadio from './radio'
const requireComponent = require.context('../packages', true, /^(?!\.\/theme-chalk)(.*[a-z0-9]+\/index+\.js)$/i);
const components = [];
const exportContent = {};
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  components.push(componentConfig.default)
})
const version = '0.0.49'
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
  FeInput,
  FeRadio
}
export default {
  install,
  version
}
