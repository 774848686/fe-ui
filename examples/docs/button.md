## Button 按钮
常用的操作按钮。

### 基础用法
基础的按钮用法。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
    <el-row>
        <fe-button>默认按钮</fe-button>
        <fe-button type="primary">主要按钮</fe-button>
        <fe-button type="success">成功按钮</fe-button>
        <fe-button type="info">信息按钮</fe-button>
        <fe-button type="warning">警告按钮</fe-button>
        <fe-button type="danger">危险按钮</fe-button>
    </el-row>
    <el-row>
        <fe-button plain>朴素按钮</fe-button>
        <fe-button type="primary" plain>主要按钮</fe-button>
        <fe-button type="success" plain>成功按钮</fe-button>
        <fe-button type="info" plain>信息按钮</fe-button>
        <fe-button type="warning" plain>警告按钮</fe-button>
        <fe-button type="danger" plain>危险按钮</fe-button>
    </el-row>
```
:::
### 禁用状态
按钮不可用状态。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
 <el-row>
        <fe-button disabled>默认按钮</fe-button>
        <fe-button type="primary" disabled>主要按钮</fe-button>
        <fe-button type="success" disabled>成功按钮</fe-button>
        <fe-button type="info" disabled>信息按钮</fe-button>
        <fe-button type="warning" disabled>警告按钮</fe-button>
        <fe-button type="danger" disabled>危险按钮</fe-button>
    </el-row>
    <el-row>
        <fe-button plain disabled>朴素按钮</fe-button>
        <fe-button type="primary" disabled plain>主要按钮</fe-button>
        <fe-button type="success" disabled plain>成功按钮</fe-button>
        <fe-button type="info" disabled plain>信息按钮</fe-button>
        <fe-button type="warning" disabled plain>警告按钮</fe-button>
        <fe-button type="danger" disabled plain>危险按钮</fe-button>
    </el-row>
```
:::
### 不同尺寸
Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置size属性来配置它们。

```html
 <el-row>
        <fe-button>默认按钮</fe-button>
        <fe-button type="primary" size="medium">中等按钮</fe-button>
        <fe-button type="success" size="small">小型按钮</fe-button>
        <fe-button type="info" size="mini">超小按钮</fe-button>
    </el-row>
```
:::