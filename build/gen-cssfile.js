const fs = require('fs');
const path = require('path');
const Components = require('./get-components')();
const basepath = path.resolve(__dirname, '../packages');

const fileExists = (filePath) => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

let indexContent = '@import "./base.scss";\n';
Components.forEach(name => {
  if (['icon', 'dropdown-item'].indexOf(name) > -1) {
    return;
  }
  const fileName = name + '.scss';
  indexContent += '@import "./' + fileName + '";\n';
  const filePath = path.resolve(basepath, 'theme-chalk', 'src', fileName);
  if (!fileExists(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
  }
});
fs.writeFileSync(path.resolve(basepath, 'theme-chalk', 'src', 'index.scss'), indexContent);
