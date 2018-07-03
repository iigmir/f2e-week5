import Vue from "vue";
import Vuex from "vuex";
import comicAPI from "@/comicapi";
import adAPI from "@/adapi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comic_info: {},
        adver_info: {},
        images_container: {
            cover: {},
            pages: [],
        },
    },
    mutations: {
        deal_data( state , payload ) {
            state.comic_info = payload.data;
        },
        deal_adv( state , payload ) {
            state.adver_info = payload.data;
        },
    },
    actions: {
        get_data( context ) {
            context.commit("deal_data" , { data: comicAPI });
        },
        get_adv( context ) {
            context.commit("deal_adv" , { data: adAPI });
        },
    },
});
