import Vue from 'vue'
/**
 * 防抖 就是指触发事件后在  特定间隔内 函数只能执行一次，如果在时间间隔内又触发了事件，则会重新计算函数执行时间
 *三个入参 响应函数名 时长 绑定事件名
 *  v-debounce="['addF',1000,'click']"  
 */
Vue.directive('debounce', {
  inserted: function (el, bindingObj) {
    let timer //定义计时器对象
    let [fn, time = 300, attr = 'click'] = bindingObj.value //解构取值 时间默认300毫秒 绑定事件默认click
    el.addEventListener(attr, () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => fn(), time)
    })
  }
})
