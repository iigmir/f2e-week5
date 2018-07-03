import Vue from "vue";
import Vuex from "vuex";
import fakeAPI from "@/fakeapi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comic_info: {},
    },
    mutations: {
        deal_data( state , payload ) {
            state.comic_info = payload.data;
        },
    },
    actions: {
        get_data( context ) {
            context.commit("deal_data" , { data: fakeAPI });
        },
    },
});
