<template>
    <div>
        <mainpage />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Mainpage from "@/components/mainpage.vue";

@Component({
    components: { Mainpage },
})

export default class Home extends Vue {}
</script>
