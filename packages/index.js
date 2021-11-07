/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import Button from './button'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
const version = '0.0.49'
const components = [
  Button,
  Input,
  Radio,
  RadioGroup
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
  Button,
  Input,
  Radio,
  RadioGroup
}
export default {
  install,
  version
}
