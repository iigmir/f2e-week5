import Vue from "vue";
import Vuex from "vuex";
import comicAPI from "@/api/comicapi";
import adAPI from "@/api/adapi";
import chapterAPI from "@/api/chapterapi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comic_info: {},
        adver_info: {},
        chapt_info: [],
    },
    mutations: {
        deal_data( state , payload ) {
            state.comic_info = payload.data;
        },
        deal_adve( state , payload ) {
            state.adver_info = payload.data;
        },
        deal_chap( state , payload ) {
            state.chapt_info = payload.data;
        },
    },
    actions: {
        get_data( context , payload ) {
            const res = comicAPI( payload.id );
            context.commit("deal_data" , { data: res });
        },
        get_adve( context ) {
            context.commit("deal_adve" , { data: adAPI });
        },
        get_chap( context , payload ) {
            const res = chapterAPI( payload.id );
            context.commit("deal_chap" , { data: res });
        },
    },
});
