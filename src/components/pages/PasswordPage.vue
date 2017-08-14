<template>
    <div class="container">
        <div class="password row center">
            <h3>
                <span>Nexus Gaming Platform</span>
                <span class="small">Alpha v0.1.6</span>
            </h3>
            <input type="password" v-model="pw" placeholder="Password" />
            <button class="button-primary" @click.prevent="auth">Submit</button>
        </div>
    </div>
</template>

<script>
    import tester from '@/services/tester.service';

    export default {
        name: "password-page",
        data() {
            return { pw: '' }
        },
        methods: {
            auth() {
                tester.authenticate(this.pw)
                .then(() => {
                    if(tester.authenticated) 
                        location.reload();
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    span {
        display: block;
    }

    .small {
        font-size: 2.4rem;
    }

    .password {
        display: block;
        padding-top: 5vh;
        text-align: center;
    }
</style>
