import Vue from 'vue'
/**
 * 节流  持续触发某个事件 特定时间间隔内只执行一次
 *三个入参 响应函数名 时长 绑定事件名
 *  v-throttle="['addF',1000,'click']"  
 */
Vue.directive('throttle', {
  inserted: function (el, bindingObj) {
    let flag, timer
    let [fn, time = 300, attr = 'click'] = bindingObj.value //解构取值 时间默认300毫秒 绑定事件默认click
    el.addEventListener(attr, () => {

      if (flag) {
        //还没清除又触发了   就中断执行return false  重新倒计时 
        console.log('enter flag')
        clearTimeout(timer)
        timer = setTimeout(() => fn(), time)
        return false
      }
      fn()
      flag = setTimeout(() => flag = null, time) //触发后 规定时间间隔 将flag清除 
    })
  }
})
