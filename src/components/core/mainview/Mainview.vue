<template>
    <main>
        <topbar></topbar>
        <div id="main-view">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    import Topbar from '@/components/core/mainview/Topbar';

    export default {
        name: "main-view",
        components: {
            'topbar': Topbar 
        },
        data() {
            return { };
        }
    };
</script>

<style lang="scss" scoped>
    main {
        margin-left: 25rem;

        #main-view {
            display: block;
            position: relative;
            padding: 3rem 5rem;
        }
    }
</style>