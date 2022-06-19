<template>
  <div class="bj">
    <div class="column">
      <span>dataType</span>
      vuex数据{{ dataTest }} 
     
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import dayjs from "dayjs";

// import { dateTransfor } from "../utils";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  props: {
    // arr: {
    //   type: Array,
    //   default:()=>[]
    // },
  },
  components: {},
  data() {
    return {
      currentDate: null,
    };
  },
  created() {
      let [a=100] =[{a:'11'},{b:'aa'}]
        console.log(a)
        console.log(typeof 'aa' == 'string')
        // typeof (null); //'object'  由于在js中，null值表示一个空对象指针，而这也正是使用typeof操作 符检测null值时会返回"object"的原因（笔试面试常考)

        console.log([1, 2] instanceof Array)

        console.log([1, 2].constructor == Array)
  
        console.log(Object.prototype.toString.call([])) //[object Array]
        console.log(Object.prototype.toString.call(null)) //[object Array]
        console.log(Object.prototype.toString.call(undefined)) //[object Array]

        console.log(!null)//true
        console.log(!undefined)//true
        console.log(!"")//true
        console.log(!" ")//false
  },
  mounted() {},
  methods: {
    ...mapMutations({
      changeDataTest: "changeDataTest",
    }),
  },
  watch: {
    //'list.xx':{} 监听一个属性的写法
    // msg: {
    //   handler(curVal, oldVal) {
    //     //改变其他变量的操作
    //   },
    //   immediately: true,
    //   deep: true,
    // },
  },
  computed: {
    // num() {
    //   //用其他变量计算 return出值
    //   return "num";
    // },

    //防止数据更新不及时 放computed获取
    ...mapState({
      dataTest: (state) => state.dataTest,
    }),
  },
  filters: {
    //这里定义的会覆盖全局
    //千分位
    // NumFormat: function (value) {
    //   if (value != null || "") {
    //     return value.toLocaleString("en-US");
    //   }
    // }
  },
};
</script>

<style lang="less" scoped>
// @import "../main.less";

input::-webkit-input-placeholder {
  // 设置输入框文字颜色
}

div::-webkit-scrollbar,
span::-webkit-scrollbar {
  // 设置滚动条样式
  display: none;
}

/deep/.van-picker {
  width: 100vw;
}

span,
img {
  display: inline-block;
}

div,
span {
  -webkit-overflow-scrolling: touch;
}

.bj {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-size: 100% 100%;
}
</style>
