#!/usr/bin/env node
const execSync = require('child_process').execSync;
const VERSION = require('../package.json').version;
const fs = require('fs');
const GIT_COMMIT = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '');

const ghpages = require('gh-pages');
execSync('npm run build:docs');

// 修改文档的域名为 ndc-ui.feminzai.com
fs.writeFile('dist/CNAME', 'ndc-ui.feminzai.com', 'utf8', (error) => {
  if (error) {
    console.log(error);
    return false;
  }
  console.log('CNAME 写入成功');
});

ghpages.publish('dist', {
  user: {
    name: 'minteliuwm',
    email: 'minteliu.l@gmail.com'
  },
  repo: 'https://github.com/minteliuwm/ndc-ui.git',
  message: `[deploy] ${GIT_COMMIT} - [release] ${VERSION}`
});
