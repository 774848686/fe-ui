## one-piece-ui

### 起源

ONE-PIECE-UI 是一套基于Vue开发UI 组件库。开发这个组件库的目的在于：
1. 对于优秀UI组件库`Element-UI`的学习
2. 在工作中的一些常用的'私有'组件的汇总，方便项目的调用

### 说明

- 之所以把这个项目叫做one-piece，原因如下：
1. 之前想叫fe-ui，但是已经有人注册了，所以放弃了；但是组件里的名字还是以`fe`开头
2. 近期在追海贼王，所以就想到one-piece-ui这个名字
- 这个项目还在孵化中，就像路飞找寻one-piece一样，必将历经千辛万险...

### npm 安装
```
npm i one-piece-ui
```

### 使用说明

你可以引入整个one-piece-ui，也可进行按需加载组件
1. 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import FeUI from 'one-piece-ui';
import '/one-piece-ui/lib/theme-chalk.css';
import App from './App.vue';

Vue.use(FeUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
2. 按需引入
借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

&nbsp;&nbsp;&nbsp;&nbsp;然后，将 .babelrc 修改为：

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "one-piece-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import {Button} from 'one-piece-ui';
import App from './App.vue';

Vue.use(Button);

new Vue({
  el: '#app',
  render: h => h(App)
});
```




