<template>
  <div class="bj">
    <div class="column">
      <span>demoBasic</span>
      vuex数据{{ dataTest }}
      <van-button type="info" v-debounce="[addF,1000]">点击测试debounce</van-button>
      <van-button type="info" v-throttle="[delF,1000]">点击测试throttle</van-button>
      count{{ count }}
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
      count: 0,
      currentDate: null,
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({
      changeDataTest: "changeDataTest",
    }),
    addF() {
      this.count++;
    },
    delF(){
        this.count--; 
    }
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
    //千分位
    NumFormat: function (value) {
      if (value != null || "") {
        return value.toLocaleString("en-US");
      }
    },
    //千分位并保留两位小数
    NumFormat1: function (value) {
      if (value != null || "") {
        var intPartFormat = Number(value)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1,"); // 将整数部分逢三一断
        return intPartFormat;
      }
    },
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
