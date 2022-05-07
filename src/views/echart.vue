<template>
  <div class="bj">
    <div class="column">
      <span>echart</span>
      <div id="box" class="box" :style="{width: '300px', height: '300px'}"></div>
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
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    ...mapMutations({
      changeDataTest: "changeDataTest",
    }),
    initChart() {
        console.log('this.$echart',this.$echarts)
      let bos = this.$echarts.init(document.getElementById("box"));
      // 绘制图表
      bos.setOption(this.setOption1("我是柱状图"));
    },
    setOption1(title) {
      let option = {
        title: { text: title },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      return option;
    },
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
