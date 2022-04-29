<template>
  <div class="bj">
    <div class="column">
      <span>filter</span>
      <span>千分位 {{ data | NumFormatThousand}}</span>
      <span>千分位并保留两位小数{{ data1 | NumFormatThousandTwo}}</span>
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
      data: 111111111111111,
      data1: 111111111111111,
    };
  },
  created() {},
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
  font-size: 20px;
}
</style>
