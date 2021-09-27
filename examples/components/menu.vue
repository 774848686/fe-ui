<template lang="html">
  <div class="menu-model">
    <el-menu default-active="1" :unique-opened="true" :default-openeds="['1', '2', '3']" :default-active="defaultActive"
      :router="true">
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/installation">安装</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>组件</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item,index) in routes" :index="item.path">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import Routers from '../router';
  export default {
    data() {
      return {
        defaultActive: '/guide/install',
        routes: []
      }
    },
    created() {
      const path = this.$route.fullPath
      this.defaultActive = path == '/' ? '/guide/install' : path;
      this.routes = Routers.routes.filter(r => r.path !== '/' && r.path !== '/guide/installation');
      console.log(this.routes)
    },
    methods: {}
  }

</script>

<style lang="css">
</style>
