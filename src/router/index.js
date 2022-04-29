import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/views/Home";
import demoBasic from "@/views/demoBasic";
import dayjs from "@/views/dayjs";
import proxy from "@/views/proxy";
import scroll from "@/views/scroll";
import debounceAndThrottle from "@/views/debounceAndThrottle";
import filter from "@/views/filter";
import persistedstate from "@/views/persistedstate";

Vue.use(Router);

export default new Router({
  routes: [{
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
    {
      path: "/proxy",
      name: "proxy",
      component: proxy
    },
    {
      path: "/scroll",
      name: "scroll",
      component: scroll
    },
    {
      path: "/debounceAndThrottle",
      name: "debounceAndThrottle",
      component: debounceAndThrottle
    },
    {
      path: "/filter",
      name: "filter",
      component: filter
    },
    {
      path: "/persistedstate",
      name: "persistedstate",
      component: persistedstate
    },
    
    

  ]
});
