<template>
    <div id="app">
        <sidebar></sidebar>
        <main-view></main-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
    };
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
        background-color: #F3F3F4;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    img {
        display: block;
        margin: 0 auto;
    }
</style>
