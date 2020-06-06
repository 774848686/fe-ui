<template>
  <div class="header-model">
    <h1 class="info">
      通用组件库
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  position: fixed;
  top:0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-model {
  height: 40px;
  .info {
    display: inline-block;
    font-size: 14px;
    color: #333;
    font-weight: normal;
  }
}
</style>
