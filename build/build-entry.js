const fs = require('fs-extra');
const path = require('path');
const uppercamelize = require('uppercamelcase');

const Components = require('./get-components')();
const packageJson = require('../package.json');

const version = process.env.VERSION || packageJson.version;
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`;

function buildPackagesEntry() {
  const uninstallComponents = ['Message'];
  const before_flag = 'Fe'
  const importList = Components.map(
    name => `import ${before_flag}${uppercamelize(name)} from './${name}'`
  );

  const exportList = Components.map(name => `${before_flag}${uppercamelize(name)}`);

  const installList = exportList.filter(
    name => !~uninstallComponents.indexOf(`${before_flag}${uppercamelize(name)}`)
  );

  const content = `${tips}
    ${importList.join('\n')}
    const version = '${version}'
    const components = [
      ${installList.join(',\n  ')}
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
      ${exportList.join(',\n  ')}
    }
    export default {
      install,
      version
    }
  `;
  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content);
}

buildPackagesEntry();
