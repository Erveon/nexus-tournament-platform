<template>
    <div id="topbar">
        <sidebar-toggle></sidebar-toggle>
        <span><router-link class="home-link" to="/">Nexus</router-link> / <strong>{{ breadcrumb }}</strong></span>
        <theme-toggle class="pull-right"></theme-toggle>
    </div>
</template>

<script>
    import ThemeToggle from "@/components/utils/ThemeToggle";
    import SidebarToggle from "@/components/utils/SidebarToggle";

    export default {
        name: "topbar",
        computed: {
            breadcrumb() {
                return this.$route.name
            }
        },
        components: {
            'theme-toggle': ThemeToggle,
            'sidebar-toggle': SidebarToggle
        }
    };
</script>

<style lang="scss" scoped>
    .home-link {
        text-decoration: none;
        color: #2c3e50;
    }

    #topbar {
        display: block;
        height: 5rem;
        padding: 0 5rem;
        background-color: #fff;
        border: 1px solid #E4E2E2;
        line-height: 5rem;
    }

    #topbar > * {
        vertical-align: middle;
    }

    .dark-theme {
        #topbar {
            color: white;
            background-color: #1B2936;
            border: 1px solid #272e3d;
        }

        .menu-toggle {
            color: white;
        }

        .home-link {
            color: white;
        }
    }
</style>