<template>
    <div class="container">
        <div class="password row center">
            <h3>
                <span>Nexus Gaming Platform</span>
                <span class="small">{{ version }}</span>
            </h3>
            <input type="password" v-model="pw" placeholder="Password" />
            <button class="button-primary" @click.prevent="auth">Submit</button>
        </div>
    </div>
</template>

<script>
    import app from '@/services/app.service';
    import tester from '@/services/tester.service';

    export default {
        name: "password-page",
        data() {
            return { 
                pw: '',
                version: app.version
            }
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
