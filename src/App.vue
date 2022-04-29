<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  //===========================下面是解决刷新页面丢失vuex数据
  created() {
   
      // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      // 简单来说，就是Object.assign()是对象的静态方法，可以用来复制对象的可枚举属性到目标对象，利用这个特性可以实现对象属性的合并。
      // Object.assign(target, ...sources)
      // 参数：  target--->目标对象
      //        source--->源对象
      // 返回值：target，即目标对象
      // 在页面加载时读取sessionStorage里的状态信息  合入复制到vuex里面
      // Object.assign() Object.assign()拷贝的是属性值，如果源对象的属性值是一个指向对象的指针，那也只拷贝那个指针。
      // 所以如果对象的属性值为基础类型，对于通过Object.assign()拷贝的那个属性而言是深拷贝；
      // 如果对象的属性值为引用，对于通过通过Object.assign()拷贝的那个属性而言其实是浅拷贝的。

//或者在vuex里面 配置vuex-persistedstate 
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    // }

    // //在页面刷新时将vuex里的信息保存到sessionStorage里 
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    // });
  },
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
