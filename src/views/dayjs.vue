<template>
  <div class="bj">
    <div class="column">
      <a href="https://dayjs.fenxianglu.cn/">dayjs官网</a>
      <span>十年前{{ date1 }}</span>
      <span>十年后{{ date2 }}</span>
      <van-button type="info" @click="showDatePicker = !showDatePicker"
        >选择年月日</van-button
      >
    </div>

    <van-cell-group class="cellGroup">
      <van-cell
        center
        title="选择日期date"
        :value="JSON.stringify(currentDate)"
        is-link
      />
      <van-cell center title="选择日期string" :value="chooseDate" is-link />
    </van-cell-group>
    <van-popup
      :overlay="flag"
      class="popUp"
      v-model="showDatePicker"
      position="bottom"
    >
      <van-datetime-picker
        @confirm="confirmDate"
        @cancel="showDatePicker = false"
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { Toast } from "vant";

export default {
  components: {},

  data() {
    return {
      date1: dayjs().subtract(10, "year").format("YYYY-MM-DD HH:mm:ss:SSS"),
      date2: dayjs().add(10, "year").format("YYYY-MM-DD HH:mm:ss:SSS"),
      flag: false,
      minDate: null,
      currentDate: null,
      maxDate: null,
      showDatePicker: false,
      chooseDate: null,
    };
  },
  mounted() {
    Toast.success("enter dayjs");
    console.log(dayjs().format());
    console.log(new Date());

    this.currentDate = dayjs().toDate();

    this.minDate = dayjs().subtract(10, "year").toDate();
    this.maxDate = dayjs().add(10, "year").toDate();
  },
  methods: {
    confirmDate(val) {
      console.log("confirmDate data", val);
      this.chooseDate = dayjs(val).format("YYYY-MM-DD");
      this.showDatePicker = false;
    },
  },
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

  .cellGroup {
    width: 690px;
    margin: 30px auto;
  }
}
</style>
