<template>
    <span class="card-title"><slot></slot></span>
</template>

<script>
    export default {
        name: "card-title"
    }
</script>

<style lang="scss" scoped>
    .card-title {
        color: #606060;
        margin: 0;
        font-size: 2.2rem;
        font-weight: lighter;
    }

    .dark-theme .card-title {
        color: white;
    }
</style>