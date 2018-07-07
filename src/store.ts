import Vue from "vue";
import Vuex from "vuex";
import comicAPI from "@/api/comicapi";
import adAPI from "@/api/adapi";
import chapterAPI from "@/api/chapterapi";
import comicchapterAPI from "@/api/comicchapterapi";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comic_info: {},
        adver_info: {},
        chapt_info: [],
        comic_page: [],
        dark_mode: false,
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
        read_comic( state , payload ) {
            state.comic_page = payload.data;
        },
        clear_comic( state ) {
            state.comic_page = [];
        },
        switch_dark( state , payload ) {
            state.dark_mode = payload.data;
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
        get_comic( context , payload ) {
            context.commit("read_comic" , { data: comicchapterAPI[payload.comicid][payload.chapterid] });
        },
        switch_dark( context , payload ) {
            context.commit("switch_dark" , { data: payload.dark_mode });
        },
    },
});
