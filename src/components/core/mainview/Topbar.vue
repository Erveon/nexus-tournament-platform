<template>
    <div id="topbar">
        <span>Nexus / <strong>{{ breadcrumb }}</strong></span>
        <theme-toggle class="pull-right"></theme-toggle>
    </div>
</template>

<script>
    import ThemeToggle from "@/components/utils/ThemeToggle";

    export default {
        name: "topbar",
        computed: {
            breadcrumb() {
                return this.$route.name
            }
        },
        components: {
            'theme-toggle': ThemeToggle
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

    .dark-theme {
        #topbar {
            color: white;
            background-color: #1B2936;
            border: 1px solid #1e1e1e;
        }
    }
</style>