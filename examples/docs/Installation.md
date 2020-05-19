## 安装

### npm 安装
```shell
npm i one-piece-ui
```

### 使用说明

你可以引入整个one-piece-ui，也可进行按需加载组件
1. 完整引入
在 main.js 中写入以下内容：

```js
  import Vue from 'vue';
  import FeUI from 'one-piece-ui';
  import App from './App.vue';

  Vue.use(FeUI);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```
2. 按需引入

在 main.js 中写入以下内容：

```js
  import Vue from 'vue';
  import {FeButton} from 'one-piece-ui';
  import App from './App.vue';

  Vue.use(FeButton);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```