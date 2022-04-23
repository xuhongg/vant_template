// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 工具函数引入
// import Utils from './utils'
 
// Object.defineProperty(Vue.prototype, '$Utils', {value: Utils})

import 'amfe-flexible'; // 引入lib-flexible
import router from './router'
import './main.less'
import './main.css' //手机样式统一

import './plugins/vant.js'
import '@vant/touch-emulator';
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
