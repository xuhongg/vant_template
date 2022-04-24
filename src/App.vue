<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
@import "main.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  // 字体抗锯齿渲染
  -moz-osx-font-smoothing: grayscale;
  color: #0a1929;
  margin-top: 60px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
</style>
