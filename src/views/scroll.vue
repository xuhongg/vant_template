<template>
  <div class="bj">
    <div class="column">
      <span>scroll</span>
     <div class="fa" id="fa">
      <span>11111111111</span>
      <span>22222222222</span>
      <span>3333333333</span>
      <span>444444444</span>
      <span>55555555</span>
      <span>6666666666</span>
      <span>7777777777</span>
    </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import dayjs from "dayjs";
// import { dateTransfor } from "../utils";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      currentDate: null,
    };
  },
  created() {},
  mounted() {
        // document.getElementById("fa").scrollTop =
    //   document.getElementById("fa").scrollHeight;
  },
  methods: {
    ...mapMutations({
      changeDataTest: "changeDataTest",
    }),
  },
  watch: {
    //'list.xx':{} 监听一个属性的写法
    // show: {
    //   handler(curVal, oldVal) {
    //     //改变其他变量的操作
    //   },
    //   immidiately: true,
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
   
   .fa {
      width: 750px;
      height: 200px;
      overflow-y:auto ;
      background: rgb(116, 143, 194);
      display: flex;
      flex-flow: column-reverse;
      align-items: center;
      span{
        text-align: center;
        margin-top: 10px;
        width: 750px;
        height: 40px;
        line-height: 40px;
        background: rgb(173, 194, 116);
      }
    }
}
</style>
