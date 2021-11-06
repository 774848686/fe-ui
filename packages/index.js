/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'

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
  Button,
  Input,
  Radio,
  RadioGroup
}
export default {
  install,
  version
}
