<template>
    <main>
        <div class="panel">
            <div class="left">
                <h2> {{ info.title }} </h2>
                <i class="fas fa-caret-right"></i>
                <select id="current-chapter">
                    <option
                        v-for="(el,id) in chap"
                        v-bind:key="id"
                        v-bind:value="el.id"
                    >
                     Chapter {{ el.id }}
                    </option>
                </select>
                <select id="current-page">
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
                    <span>s</span>
                    <i class="fas fa-moon"></i>
                </label>
            </div>
        </div>
        <div>
            
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions , mapState } from "vuex";

export default Vue.extend({
    data() {
        return {
            dark_mode: false
        };
    },
    mounted() {
        if( Object.keys( this.info ).length < 1 && this.info.constructor === Object ) {
            this.get_data({ id:this.$route.params.comicid });
        }
        if( Object.keys( this.adve ).length < 1 && this.adve.constructor === Object ) {
            this.get_adve();
        }
        if( this.chap.length < 1 ) {
            this.get_chap({ id: this.$route.params.chapid });
        }
        this.get_comic({
            comicid:this.$route.params.comicid ,
            chapterid:this.$route.params.chapid
        });
    },
    methods: {
        ...mapActions([
            "get_data",
            "get_adve",
            "get_chap",
            "get_comic"
        ]),
    },
    computed: {
        ...mapState({
            info: ( state ) => state.comic_info,
            adve: ( state ) => state.adver_info,
            chap: ( state ) => state.chapt_info,
            page: ( state ) => state.comic_page,
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
}
</style>
