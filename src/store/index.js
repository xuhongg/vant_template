import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataTest:'abc'
    },
    mutations: {
        changeDataTest(state,data){
            state.dataTest=data
        }
    },
    actions: {},
    modules: {}
});
