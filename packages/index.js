/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import FeButton from './button'
    const version = '0.0.46'
    const components = [
      FeButton
    ]
    const install = Vue => {
      components.forEach(Component => {
        Vue.use(Component)
      })

      Vue.prototype.$message = Message
    };
    /* istanbul ignore if */
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    export {
      install,
      version,
      FeButton
    }
    export default {
      install,
      version
    }
  