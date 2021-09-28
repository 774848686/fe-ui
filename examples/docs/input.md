## Input 输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo
```html

<fe-input v-model="input" placeholder="请输入内容"></fe-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::


### 禁用状态

:::demo 通过 disabled 属性指定是否禁用 input 组件
```html

<fe-input v-model="input" disabled placeholder="请输入内容"></fe-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### 可清空

:::demo 使用clearable属性即可得到一个可清空的输入框
```html

<fe-input v-model="input" value="1" clearable placeholder="请输入内容"></fe-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::