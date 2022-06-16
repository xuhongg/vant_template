<template>
  <div class="bj column">
    home
    <van-button type="info" @click="$router.push({ name: 'demoBasic' })">demoBasic</van-button>
    <van-button type="primary" @click="$router.push({ name: 'dayjs' })">dayjs</van-button>

    <van-button type="danger" @click="$router.push({ name: 'proxy' })">proxy</van-button>
    <van-button type="warn" @click="$router.push({ name: 'scroll' })">scroll</van-button>
    <van-button type="info" @click="$router.push({ name: 'debounceAndThrottle' })">防抖节流</van-button>

    <van-button type="primary" @click="$router.push({ name: 'filter' })">全局filter</van-button>
    <van-button type="warn" @click="$router.push({ name: 'persistedstate' })">persistedstate</van-button>

    <van-button type="danger" @click="$router.push({ name: 'echart' })">echarts</van-button>

    <van-button type="primary" @click="$router.push({ name: 'mock' })">mock</van-button>
    <van-button type="warn" @click="$router.push({ name: 'flex' })">flex</van-button>
    <van-button type="primary" @click="$router.push({ name: 'picPress' })">picPress</van-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() { },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "../main.less";

input::-webkit-input-placeholder {
  // 设置输入框文字颜色
}

div::-webkit-scrollbar,
span::-webkit-scrollbar {
  // 设置滚动条样式
  display: none;
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

  .van-button {
    width: 70%;
  }

  div {
    color: #2c3e50;
    font-size: 50px;
  }
}
</style>
