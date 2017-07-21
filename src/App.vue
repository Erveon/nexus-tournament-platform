<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html, body {
    margin: 0;
    padding: 0;
}

img {
    display: block;
    margin: 0 auto;
}
</style>
