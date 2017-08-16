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
        transition: 0.4s;

        #main-view {
            display: block;
            position: relative;
        }
    }

    @media(max-width: 800px) {
        main {
            margin-left: 0;
        }
    }

    body.collapsed-sidebar main {
        margin-left: 0;
    }
</style>