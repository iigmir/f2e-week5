<template>
    <div id="app" v-bind:class="{ dark : $store.state.dark_mode }" >
        <nav>
            <router-link tag="h1" to="/">Comicomic</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style lang="scss">
* { margin: 0; }

nav
{
    color: #50FF44;
    background: #000000;
    text-align: center;
    h1
    {
        cursor: pointer;
        padding: 1rem;
    }
}
</style>
