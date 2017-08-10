<template>
    <div id="nav-account">
        <template v-if="authenticated">
            <div class="info block">
                {{ getUsername() }}
            </div>
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
    import Account from '@/services/account.service';

    export default {
        name: "nav-account",
        data() {
            return {
                authenticated: Account.authenticated
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
                return Account.username;
            }
        }
    };
</script>

<style lang="scss" scoped>
    #nav-account {
        display: block;

        .block {
            background-color: #2980B9;
            display: block;
            height: 5em;
            line-height: 5em;
            text-align: center;
            color: white;
            font-size: 2rem;
        }

        .connect {
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