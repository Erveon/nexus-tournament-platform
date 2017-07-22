<template>
    <div id="topbar">
        Home / <strong>{{ breadcrumb }}</strong>
    </div>
</template>

<script>
    export default {
        name: "topbar",
        data() {
            return { 
                breadcrumb: "Home"
            };
        }
    };
</script>

<style lang="scss" scoped>
    #topbar {
        display: block;
        height: 5rem;
        line-height: 5rem;
        padding: 0 5rem;
        background-color: #fff;
        border: 1px solid #E4E2E2;
    }
</style>