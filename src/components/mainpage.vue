<template>
    <main>
        <adv v-bind:api="adve.header" />
        <div id="main-container">
            <aside>
                <img v-bind:src="info.cover" alt="Cover" />
            </aside>
            <article>
                <hgroup>
                    <h2> {{ info.title }} </h2> 
                </hgroup>
                <section>
                    <h3 hidden> Info of comic </h3>
                    <dl>
                        <dt> Genres </dt>
                        <dd>
                            <span
                                class="genre"
                                v-for="( ele , idx ) in info.genres"
                                v-bind:key="idx"
                            >
                                {{ ele }} <span>/</span>
                            </span>
                        </dd>
                        <dt> Author </dt>
                        <dd> {{ info.author }} </dd>
                        <dt> Status </dt>
                        <dd> {{ info.status }} </dd>
                        <dt> Rate </dt>
                        <dd> {{ info.rate }} </dd>
                    </dl>
                </section>
                <section class="summary">
                    <h3> Summary </h3>
                    <p> {{ info.summary }} </p>
                </section>
                <div hidden>
                    <router-link to="/about">About</router-link>
                </div>
            </article>
        </div>
        <adv v-bind:api="adve.center" />
        <article id="chapters">
            <h2> All Chapters </h2>
            <section>
                <p v-for="(e) in chap" v-bind:key="e.id">
                    <router-link :to="{
                        name: 'comic',
                        params: {
                            comicid: info.id ,
                            chapid: e.id
                        }
                    }"> {{ e.title }} </router-link>
                    <span v-if="e.latest">NEW</span>
                </p>
            </section>
        </article>
        <adv v-bind:api="adve.footer" />
    </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions , mapState } from "vuex";
import Advertisement from "@/components/adv.vue";

export default Vue.extend({
    data() {
        return {};
    },
    mounted() {
        this.get_data({ id: 1 });
        this.get_adve();
        this.get_chap({ id: this.info.id });
    },
    methods: {
        ...mapActions([
            "get_data",
            "get_adve",
            "get_chap",
        ]),
    },
    computed: {
        ...mapState({
            info: ( state ) => state.comic_info,
            adve: ( state ) => state.adver_info,
            chap: ( state ) => state.chapt_info,
        }),
    },
    components: {
        adv: Advertisement,
    },
});
</script>

<style lang="scss">
main
{
    max-width: 640px;
    margin: 1rem auto;
    #main-container
    {
        display: flex;
        justify-content: space-around;
        & > * 
        {
            flex: 1;
        }
        aside
        {
            border: 4px solid #000000;
            img{ max-width: 100%; }
        }
        hgroup
        {
            padding: 0.5rem 1rem 0.5rem 1rem;
            background: #000000;
            color: #FFFFFF;
        }
        section
        {
            margin: 1rem 0 0 1rem;
            dl
            {
                display: flex;
                flex-wrap:wrap;
                dt, dd { flex-basis: 50%; }
                dt { font-weight: 900; }
                dd .genre:last-child span { display: none; }
            }
            &.summary
            {
                padding-top: 1rem;
                h3{ margin-bottom: 1rem; }
            }
        }
    }
    #chapters
    {
        margin-top: 1rem;
        h2
        {
            color: #FFFFFF;
            background-color: #000000;
            padding: 0.5rem 1rem 0.5rem 1rem;
            display: inline-block;
        }
        section
        {
            padding: 1rem;
            border: 4px solid #000000;
            font-weight: 900;
            p
            {
                &:not( :last-child ){ margin-bottom: 1rem; }
                a,a:visited
                {
                    color: #000000;
                    text-decoration: none;
                }
                span
                {
                    background: #50FF44;
                    margin-left: 1rem;
                    padding: 2px 12px 2px 12px;
                }
            }
        }
    }
}
</style>
