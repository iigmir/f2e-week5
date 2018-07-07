<template>
    <main id="comic">
        <div class="panel">
            <div class="left">
                <h2> {{ info.title }} </h2>
                <i class="fas fa-caret-right"></i>
                <select
                    id="current-chapter"
                    v-model="current_chapter"
                    v-on:change="switch_chap">
                    <option
                        v-for="(el,id) in chap"
                        v-bind:key="id"
                        v-bind:value="el.id"
                    >
                        Chapter {{ el.id }}
                    </option>
                </select>
                <select id="current-page" v-model="current_page_index">
                    <option
                        v-for="(el,id) in page"
                        v-bind:key="id"
                        v-bind:value="id"
                    >
                        Page {{ id + 1 }}
                    </option>
                </select>
            </div>
            <div class="right">
                <label>
                    <input type="checkbox" v-model="dark_mode">
                    <i class="fas fa-sun"></i>
                    <span class="switch">
                        <span class="btn"></span>
                    </span>
                    <i class="fas fa-moon"></i>
                </label>
            </div>
        </div>
        <article>
            <h2 hidden> Content of {{ info.title }} </h2>
            <img v-bind:src="page[current_page_index]" v-bind:alt="info.title" />
            <div class="goto prev fa-3x" v-on:click="switch_page( -1 )">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="goto next fa-3x" v-on:click="switch_page( 1 )">
                <i class="fas fa-chevron-right"></i>
            </div>
        </article>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions , mapState } from "vuex";

export default Vue.extend({
    data() {
        return {
            dark_mode: false,
            fisrt_enter: true,
            current_chapter: 0,
            current_page_index: 0,
        };
    },
    watch: {
        dark_mode( newval ) {
            this.switch_dark({ dark_mode : newval });
        }
    },
    mounted() {
        if( Object.keys( this.info ).length < 1 && this.info.constructor === Object ) {
            this.get_data({ id:this.$route.params.comicid });
        }
        if( this.chap.length < 1 ) {
            this.get_chap({ id: this.$route.params.chapid });
        }
        if( Object.keys( this.adve ).length < 1 && this.adve.constructor === Object ) {
            this.get_adve();
        }
        this.get_comic({
            comicid:this.$route.params.comicid ,
            chapterid:this.$route.params.chapid
        });
        this.current_chapter = parseInt( this.$route.params.chapid , 10 );
    },
    methods: {
        ...mapActions([
            "get_data",
            "get_adve",
            "get_chap",
            "get_comic",
            "switch_dark"
        ]),
        switch_chap() {
            let the_route = {
                name: 'comic',
                params: {
                    comicid: this.$route.params.comicid,
                    chapid: this.current_chapter,
                }
            };
            this.$router.push( the_route );
            this.get_comic({
                comicid:this.$route.params.comicid ,
                chapterid:this.$route.params.chapid
            });
            this.current_page_index = 0;
        },
        switch_page( input_number: number ) {
            let switch_to = 0;
            let page_in_future = this.current_page_index + input_number;
            if( page_in_future <= 0 ) {
                switch_to = 0;
            } else if( page_in_future >= this.page.length - 1 ) {
                switch_to = this.page.length - 1;
            } else {
                switch_to = page_in_future;
            }
            this.current_page_index = switch_to;
        }
    },
    computed: {
        ...mapState({
            info: ( state ) => state.comic_info,
            adve: ( state ) => state.adver_info,
            chap: ( state ) => state.chapt_info,
            page: ( state ) => state.comic_page,
            dark: ( state ) => state.dark_mode,
        }),
    },
});
</script>

<style scope lang="scss">
.panel
{
    display: flex;
    .left
    {
        display: flex;
        * { margin-right: 5px; }
        i { padding-top: 5px }
    }
    .right
    {
        label
        {
            input{ display: none; }
            & > * { margin-right: 8px; }
            .switch
            {
                display: inline-block;
                width: 48px;
                height: 16px;
                margin-bottom: -6px;
                padding: 2px;
                border: #000000 2px solid;
                .btn
                {
                    display: block;
                    width: 50%;
                    height: 100%;
                    background-color: #000000;
                }
            }
        }
    }
}
article
{
    position: relative;
    .goto
    {
        position: absolute;
        cursor: pointer;
        width:80px;
        top:0;
        padding-top: 50%;
        padding-bottom: 50%;
        text-align: center;
        &.prev{ left:-80px; }
        &.next{ right:-80px; }
        &:hover
        {
            background: #000000;
            color: #50FF44;
        }
    }
    img{ max-width: 100%; }
}

.dark
{   // Dark mode
    background-color: #000000;
    color: #FFFFFF;
    .panel .right label .switch
    {
        border: #FFFFFF 2px solid;
        .btn
        {
            margin-left: 50%;
            background-color: #FFFFFF;
        }
    }
    article .goto:hover
    {
        background: #50FF44;
        color: #000000;
    }
}
</style>
