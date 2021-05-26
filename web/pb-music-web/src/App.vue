<!--
 * @Author: your name
 * @Date: 2019-10-13 13:23:44
 * @LastEditTime: 2020-05-07 15:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \home\pb-music\src\App.vue
 -->
<template>
  <div id="app">
    <!-- 这个App.vue 中一定要有这个router-view组件，否则不能进行渲染  -->
    <!-- <router-view v-if="isRouterAlive" />  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true //是否控制页面加载
    };
  },

  methods: {
    //页面重新加载
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
html,body{
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
  padding: 0;
  font-family: "MicrosoftYaHei";
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
</style>
