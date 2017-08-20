<template>
    <div id="nav-account">
        <template v-if="authenticated">
            <router-link :to="'/user/' + getUsername()" class="info block">
                {{ getUsername() }}
            </router-link>
        </template>
        <template v-else>
            <a href="#" @click.prevent="showConnect" class="connect block">
                Sign up / Log in
            </a>
        </template>
    </div>
</template>

<script>
    import { EventBus } from '@/eventbus.js';
    import account from '@/services/account.service';

    export default {
        name: "nav-account",
        data() {
            return {
                authenticated: account.authenticated
            }
        },
        mounted() {
            EventBus.$on('authentication', () => {
                this.authenticated = true;
            });
        },
        methods: {
            showConnect() {
                EventBus.$emit('showconnect');
            },
            getUsername() {
                return account.username;
            }
        }
    };
</script>

<style lang="scss" scoped>
    #nav-account {
        display: block;

        .block {
            text-decoration: none;
            background-color: #2980B9;
            display: block;
            height: 5em;
            line-height: 5em;
            text-align: center;
            color: white;
            font-size: 2rem;

            text-decoration: none;
            border-bottom: 0.6rem solid #165B88;
            transition: 0.3s;

            &:hover {
                background-color: #399bdb;
                border-bottom: 0.6rem solid #267cb5;
            }
        }
    }
</style>