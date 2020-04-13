<template>
  <div class="app">
    <div class="row">
      <fe-button>按钮</fe-button>
      <fe-button type="primary">按钮</fe-button>
      <fe-button type="success">按钮</fe-button>
      <fe-button type="info">按钮</fe-button>
      <fe-button type="warning">按钮</fe-button>
    </div>
    <div class="row">
      <fe-button plain>按钮</fe-button>
      <fe-button plain type="primary">按钮</fe-button>
      <fe-button plain type="success">按钮</fe-button>
      <fe-button plain type="info">按钮</fe-button>
      <fe-button plain type="warning">按钮</fe-button>
    </div>
    <div class="row">
      <fe-button round plain>按钮</fe-button>
      <fe-button round plain type="primary">按钮</fe-button>
      <fe-button round plain type="success">按钮</fe-button>
      <fe-button round plain type="info">按钮</fe-button>
      <fe-button round plain type="warning">按钮</fe-button>
    </div>
    <div class="row">
      <fe-button circle>OK</fe-button>
      <fe-button circle type="primary">OK</fe-button>
      <fe-button circle type="success">OK</fe-button>
      <fe-button circle type="info">OK</fe-button>
      <fe-button circle type="warning">OK</fe-button>
    </div>
    <div class="row">
      <fe-button plain>字体</fe-button>
      <fe-button icon="fe-icon-check" circle plain type="primary"></fe-button>
      <fe-button icon="fe-icon-message" circle plain type="success"></fe-button>
      <fe-button icon="fe-icon-search" circle plain type="info"></fe-button>
      <fe-button icon="fe-icon-star-off"  plain type="warning">字体图标</fe-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump (e) {
      console.log(e)
      alert(123)
    }
  }
}
</script>

<style lang="scss" scoped>
.app {
    width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
.row {
  padding: 10px 0;
}
.fe-button {
  margin-left: 10px;
}
</style>
