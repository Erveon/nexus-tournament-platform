<template>
    <div id="app">
        <sidebar></sidebar>
        <main-view></main-view>
        <modals></modals>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'app',
        created() {
        }
    };
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        color: #2c3e50;
        background-color: #F3F3F4;
    }

    .dark-theme #app {
        background-color: #121E29;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: "Open Sans", sans-serif;
    }

    img {
        display: block;
        margin: 0 auto;
    }
</style>
