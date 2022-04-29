import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  // 默认存储到localStorage
  // 想要存储到sessionStorage，配置如下
  //   plugins: [createPersistedState({
  //     storage: window.sessionStorage
  // })],

  // 只储存state中的dataTest
  //   plugins:[createPersistedState({
  //   storage: window.sessionStorage,
  //   reducer(val) { //val是state所有值
  //     return {
  //       dataTest: val.dataTest
  //     }
  //   }
  // })],
  state: {
    dataTest: 'abc',
    dataTest2:'efg'
  },
  mutations: {
    changeDataTest(state, data) {
      state.dataTest = data
    }
  },
  actions: {},
  modules: {}
});
