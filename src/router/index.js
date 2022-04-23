import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home";
import demoBasic from "@/views/demoBasic";
import dayjs from "@/views/dayjs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/dayjs",
      name: "dayjs",
      component: dayjs
    },
    {
      path: "/demoBasic",
      name: "demoBasic",
      component: demoBasic
    },
    
  ]
});
