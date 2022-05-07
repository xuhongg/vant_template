<template>
    <div class="bj">
        <div class="column">
            <span>flex</span>
            <div class="boxOut">
                <span>11111111111</span>
                <span>222222222</span>
                <div>33333333333</div>
                <p>4444444444</p>
                <span>55555555555</span>
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
    created() { },
    mounted() { },
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

    .boxOut {
        width: 750px;
        height: 750px;
        background: blue;
        display: flex;
        flex-direction: column;
        flex-shrink: 1;
        flex-grow: 1;
        span {
            background: red;
        }
        p{
            height: 400px;
            background: yellow;
        }
    }
}
</style>
