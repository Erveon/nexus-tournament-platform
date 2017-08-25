<template>
    <div id="topbar-wrapper">
        <sidebar-toggle class="sidebar-toggle"></sidebar-toggle>
        <div id="topbar">
            <span><!--<router-link class="home-link" to="/">Nexus</router-link> / <strong>-->{{ breadcrumb }}</strong></span>
            <div class="options">
                <template v-if="username">
                    <router-link class="text" v-if="username" :to="'/user/' + username">{{username}}</router-link>
                    <router-link v-if="username" :to="'/user/' + username + '/settings'"><i class="fa fa-cog"></i></router-link>
                    <theme-toggle></theme-toggle>
                </template>
                <template v-else>
                    <theme-toggle></theme-toggle>
                    <a @click.prevent="showLogin()" class="text cta">Log in</a>
                    <a @click.prevent="showRegister()" class="text cta">Sign up</a>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import ThemeToggle from "@/components/utils/ThemeToggle";
    import SidebarToggle from "@/components/utils/SidebarToggle";
    import { EventBus } from '@/eventbus.js';
    import account from '@/services/account.service';

    export default {
        name: "topbar",
        data() {
            return {
                username: account.username
            };
        },
        mounted() {
            EventBus.$on('authentication', () => {
                this.username = account.username;
            });
        },
        computed: {
            breadcrumb() {
                return this.$route.name
            }
        },
        methods: {
            showLogin() {
                EventBus.$emit('showconnect', { login: true });
            },
            showRegister() {
                EventBus.$emit('showconnect', { login: false });
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
        top: .2rem;
        margin-left: 1.2rem;
    }

    #topbar-wrapper {
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #E4E2E2;
        line-height: 5rem;
        height: 5rem;
    }

    #topbar {
        padding: 0 0 0 5rem;
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

    .options {
        font-size: 0;
        position: absolute;
        top: 0; right: 0;

        a {
            cursor: pointer;
            font-size: 2rem;
            color: #444444;
            background-color: transparent;
            text-align: center;
            transition: .4s;
            display: inline-block;
            padding: 0 1.5rem;

            &:hover {
                background-color: #F0F5F9;
            }

            &.text {
                text-decoration: none;
                font-size: 1.6rem;
            }

            &.text.cta {
                padding: 0 3.7rem;
                color: white;
                background-color: #156DAD;

                &:hover {
                    background-color: #277cba;
                }
            }
        }
    }

    .dark-theme .options a {
        color: white;

        &:hover {
            background-color: #272E3D;
        }
    }
</style>