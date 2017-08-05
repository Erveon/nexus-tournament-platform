<template>
    <div id="nav-account">
        <a href="#" @click.prevent="showConnect" class="connect">
            Sign up / Log in
        </a>
    </div>
</template>

<script>
    import { EventBus } from '@/eventbus.js';

    export default {
        name: "nav-account",
        methods: {
            showConnect() {
                EventBus.$emit('showconnect');
            }
        }
    };
</script>

<style lang="scss" scoped>
    #nav-account {
        display: block;

        .connect {
            background-color: #2980B9;
            display: block;
            height: 5em;
            line-height: 5em;
            text-align: center;
            color: white;
            text-decoration: none;
            font-size: 2rem;
            border-bottom: 0.6rem solid #165B88;
            transition: 0.3s;

            &:hover {
                background-color: #399bdb;
                border-bottom: 0.6rem solid #267cb5;
            }
        }
    }
</style>