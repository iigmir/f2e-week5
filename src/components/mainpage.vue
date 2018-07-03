<template>
    <main>
        <div id="main-container">
            <aside>
                <img src="../assets/logo.png" />
            </aside>
            <article>
                <hgroup>
                    <h2> This is an main page </h2> 
                </hgroup>
                <section>
                    <h3 hidden> Info of comic </h3>
                    <dl>
                        <dt> Genres </dt>
                        <dd>
                            <em>HyperText Markup Language</em> describes the structure of the page and its contents.
                        </dd>
                        <dt> Author </dt>
                        <dd>
                            <em>Cascading Style Sheets</em> describes how a site looks and even to some extent how it responds to certain events.
                        </dd>
                        <dt> Status </dt>
                        <dd>
                            JavaScript is the programming language used to define the logic and function of a site beyond simple look and feel. Any computation or "thinking" is done using JavaScript.
                        </dd>
                        <dt> Rate </dt>
                        <dd>
                            JavaScript is the programming language used to define the logic and function of a site beyond simple look and feel. Any computation or "thinking" is done using JavaScript.
                        </dd>
                    </dl>
                </section>
                <router-link to="/about">About</router-link>
            </article>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions , mapState } from "vuex";

export default Vue.extend({
    data() {
        return {};
    },
    mounted() {
        this.get_data();
    },
    methods: {
        ...mapActions([
            "get_data", // map `this.increment()` to `this.$store.dispatch('increment')`
        ]),
    },
    computed: {
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
            flex-grow: 1;
            flex-basis: 0;
        }
        hgroup
        {
            width: 100%;
            padding: 0.5rem 1rem 0.5rem 1rem;
            background: #000000;
            color: #FFFFFF;
        }
        section
        {
            margin-top: 1rem;
        }
    }
}
</style>
