<template>
    <main>
        <div class="panel">
            <div class="left">
                <h2> {{ info.title }} </h2>
                <i class="fas fa-caret-right"></i>
                <select id="pet-select">
                    <option value="none" selected>--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
                <select id="pet-select2">
                    <option value="none" selected>--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
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
