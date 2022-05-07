// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios'

import Vue from "vue";
import App from "./App";

//
import "./mock/index.js"


//仅在开发环境 去做vconsole展示
import VConsole from 'vconsole/dist/vconsole.min.js'; //import vconsole
if (process.env.NODE_ENV == 'development') {
  // eslint-disable-next-line no-unused-vars
  let vConsole = new VConsole();
}
// 工具函数引入
import "@/directive/debounce.js"
import "@/directive/throttle.js"

//echarts 引入

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts


//引入全局filter
import * as filter from './filter'
console.log('filter',filter)
Object.keys(filter).forEach(item => {
  Vue.filter(item, filter[item])
})

// import Utils from './utils'

// Object.defineProperty(Vue.prototype, '$Utils', {value: Utils})

import "amfe-flexible"; // 引入lib-flexible
import router from "./router";
import "./main.less";
import "./main.css"; //手机样式统一

import "./plugins/vant.js";
import "@vant/touch-emulator";
import store from "./store";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: {
    App
  },
  template: "<App/>"
});
