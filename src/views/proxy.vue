<template>
  <div class="bj">
    <div class="column">
      <span>proxy</span>
      <span class="data"> {{ result }}</span>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import dayjs from "dayjs";
// import { dateTransfor } from "../utils";
import { get, post } from "../http.js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      currentDate: null,
      result: null,
      Loading: null,
    };
  },
  created() {
    //开源api get https://api.apiopen.top/getJoke?page=1&count=2&type=video

    // this.$axios.get("/getJoke?page=1&count=2&type=video")
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    // get('/getJoke',{page:1,count:3,type:'video'}).then(res => {
    //     console.log('enter get res', res)
    // }).catch(err => {

    // })
    this.loading = Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true,
      message: "加载中...",
    });
    post("/getJoke", { page: 1, count: 2, type: "video" })
      .then((res) => {
        console.log("enter post res", res);
        this.result = res.result;
        this.loading.clear();
      })
      .catch((err) => {
        this.loading.clear();
      });
  },
  mounted() {},
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
  .data {
    margin: 30px auto;
    width: 690px;
    height: 750px;
    overflow: auto;
    //   background: red;
  }
}
</style>
