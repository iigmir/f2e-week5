<template>
    <div class="adv">
        <a v-bind:href="api.url" target="_blank">
            <img v-bind:src="api.img" alt="Advertisment" />
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component export default class Advertisement extends Vue {
    @Prop() private api!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.adv
{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    img{ width: 100%; }
}
</style>
