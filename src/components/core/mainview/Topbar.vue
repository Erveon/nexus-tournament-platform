<template>
    <div id="topbar-wrapper">
        <sidebar-toggle class="sidebar-toggle"></sidebar-toggle>
        <div id="topbar">
            <span><router-link class="home-link" to="/">Nexus</router-link> / <strong>{{ breadcrumb }}</strong></span>
            <theme-toggle class="pull-right"></theme-toggle>
        </div>
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

    .sidebar-toggle {
        position: absolute;
        top: .5rem;
        margin-left: 1.2rem;
    }

    #topbar-wrapper {
        background-color: #fff;
        border: 1px solid #E4E2E2;
        line-height: 5rem;
        display: block;
        height: 5rem;
    }

    #topbar {
        padding: 0 5rem;
    }

    #topbar > * {
        vertical-align: middle;
    }

    .dark-theme {
        #topbar-wrapper {
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

    @media(max-width: 900px) {
        #topbar {
            padding: 0 0 0 5rem;
        }
    }
</style>