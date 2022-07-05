<template>
  <div class="bj">
    <div class="flex">
      <span>11</span>
      <span>22</span>
      <span>33</span>
    </div>
    <div class="grid1">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>

    <div class="grid2">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>10</span>
      <span>11</span>
      <span>12</span>
      <span>13</span>
      <span>14</span>
      <span>15</span>
      <span>16</span>
    </div>

    <div class="grid3">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
    </div>

    <div class="grid4">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
    </div>

    <div class="grid5">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
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
    //网格容器和网格项
    // 第一步，我们需要把某个容器指定成网格容器：
    // 这个时候，.grid 就变成了一个 网格容器（Grid Conatainer），包含在这个容器中的子元素则自动变成了 网格项(Grid Items)， Grid 的所有属性都在两个概念之间展开。就是一个网格容器中，包含着 9 个网格项。
    // 上面这个等宽的三行三列的布局，如何实现呢？在传统方案中，我们可能需要借助浮动属性等来实现，但是借助 Grid ，就很简单了，在为父元素指定 display: grid; 之后，我们可以借助两个属性: grid-template-columns, grid-template-rows 和一个新单位 fr 来轻松实现。
    //     .grid {
    //     display: grid;
    //     grid-template-columns: 1fr 1fr 1fr;
    //     grid-template-rows: 1fr 1fr 1fr;
    //     grid-gap: 20px 10px;
    // }
    // grid-template-columns 和 grid-template-rows 分别表示水平方向上和垂直方向上网格项的空间分配比例，fr 是一个新单位，表示占据可用空间的一等分。
    // 所以上面的代码表示，在水平和垂直方向分别把可用空间分为三份，且三份占据空间相等。grid-gap 属性指的是网格项之间的间隙，后面会介绍到。
    // 学习到了这两个属性，我们已经可以轻松地布局出常见的多栏布局，例如我们要实现一个水平为 1:2:1 的布局，可以这样实现：
    // .grid {
    //     display: grid;
    //     grid-template-columns: 1fr 2fr 1fr;
    //     grid-gap: 10px;
    // }
    // 注意：column，float，clear 与 vertical-align 在栅格容器上无效。
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
  overflow: auto;
  background-size: 100% 100%;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .grid1 {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 10px;
    // padding:20px;
    // height: 500px;
    width: 750px;
    background: red;
    span {
      background: blue;
      font-size: 20px;
      height: 100px;
      // width: 100px;
      line-height: 100px;
      text-align: center;
      border: 1px solid yellow;
      justify-self: stretch;
    }
  }

  .grid2 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 10% 10% 40% 40%;
    grid-template-rows: repeat(4, 25%);
    // grid-gap: 10px;
    width: 750px;
    height: 500px;
    background: red;
    span {
      background: blue;
      font-size: 20px;
      height: 100px;
      width: 100px;
      line-height: 100px;
      text-align: center;

      border: 1px solid yellow;
      // justify-self: center;
      //  justify-self: start | end | center | stretch;
    }
  }

  .grid3 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: repeat(2, 50%);
    grid-gap: 10px 20px; //x轴的数值、y轴的数值
    width: 750px;
    height: 500px;
    background: red;

    grid-auto-flow: column; //排列顺序 这是先列后行
    justify-items: end; //start | end | center |stretch   这是所有单元格内容的水平对齐方式
    align-items: start; //这是所有单元格内容的垂直对齐方式
    place-items: center center; //水平垂直的合写
    span {
      background: blue;
      font-size: 20px;
      height: 100px;
      width: 100px;
      line-height: 100px;
      text-align: center;

      border: 1px solid yellow;
      // justify-self: center;
      //  justify-self: start | end | center | stretch;
    }
  }

  .grid4 {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 100px 200px 100px;
    grid-template-rows: repeat(2, 100px);
    grid-gap: 10px 20px; //x轴的数值、y轴的数值
    width: 750px;
    height: 500px;
    background: red;

    justify-content: center; //整个内容区域的水平和垂直对齐方式
    align-content: center; //

    place-items: center center; //单元格内容 水平垂直的合写

    span {
      background: blue;
      font-size: 20px;
      height: 100px;
      width: 100px;
      line-height: 100px;
      text-align: center;
      border: 1px solid yellow;
      // justify-self: center;
      //  justify-self: start | end | center | stretch;
    }
  }

  .grid5{
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    place-items: center center; //单元格内容 水平垂直的合写
    
    width: 750px;
    height: 500px;
    background: red;
    span {
      background: blue;
      font-size: 20px;
      height: 100px;
      width: 100px;
      line-height: 100px;
      text-align: center;

      border: 1px solid yellow;
      // justify-self: center;
      //  justify-self: start | end | center | stretch;
    }
  }
}
</style>
