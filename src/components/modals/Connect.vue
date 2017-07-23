<template>
    <vodal :show="show" @showconnect="show = true" @hide="close" :closeButton="false" autoSizing>
        <ul>
            <li><a :class="{ active: login }" href="login" @click.prevent="switchLogin">Log in</a></li>
            <li><a :class="{ active: !login }" href="signup" @click.prevent="switchRegister">Sign up</a></li>
        </ul>
        <div class="tab login" v-if="login">
            <form>
                <label for="login-email">Email</label>
                <input class="u-full-width" type="email" name="email" placeholder="Your@email.com" ref="loginemail" id="login-email">
                <label for="login-password">Password</label>
                <input class="u-full-width" type="password" name="password" placeholder="Password" id="login-password">
                <ladda :loading="submitting" @click.prevent="submit" class="button-primary u-full-width" data-style="zoom-in" type="submit">
                    Log in
                </ladda>
            </form>
        </div>
        <div class="tab register" v-else>
            <form>
                <div class="row">
                    <div class="six columns">
                        <label for="register-email">Email</label>
                        <input class="u-full-width" type="email" name="email" placeholder="Your@email.com" ref="registeremail" id="register-email">
                    </div>
                    <div class="six columns">
                        <label for="register-username">Username</label>
                        <input class="u-full-width" type="text" name="username" placeholder="Username" id="register-username">
                    </div>
                </div>
                <label for="register-password">Password</label>
                <input class="u-full-width" type="password" name="password" placeholder="Password" id="register-password">
                <label for="register-repassword">Confirm password</label>
                <input class="u-full-width" type="password" name="repassword" placeholder="Password" id="register-repassword">
                <ladda :loading="submitting" @click.prevent="submit" class="button-primary u-full-width" data-style="zoom-in" type="submit">
                    Sign up
                </ladda>
            </form>
        </div>
    </vodal>
</template>

<script>
    import { EventBus } from '../../eventbus.js';
    import $ from 'jquery';

    export default {
        name: 'connect',
        data() {
            return {
                show: false,
                login: true,
                submitting: false
            }
        },
        methods: {
            switchLogin() {
                if(this.submitting) return;
                this.login = true;
                this.$nextTick(() => this.$refs.loginemail.focus());
            },
            switchRegister() {
                if(this.submitting) return;
                this.login = false;
                this.$nextTick(() => this.$refs.registeremail.focus());
            },
            submit() {
                this.submitting = true;
                $("input").prop('disabled', true);
            },
            close() {
                if(this.submitting) return;
                this.show = false;
            }
        },
        mounted() {
            EventBus.$on('showconnect', () => {
                this.show = true;
                this.$nextTick(() => {
                    if(this.login) this.$refs.loginemail.focus();
                    else this.$refs.registeremail.focus();
                });
            });
        }
    }
</script>

<style lang="scss" scoped>

    form {
        margin: 0;

        .button-primary {
            margin: 0;
        }
    }

    .ladda-button {
        padding: 0;
        position: relative;
    }

    ul {
        width: 100%;
        text-align: center;
        list-style-type: none;
        height: 5rem;
        line-height: 5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #eee;

        li {
            display: inline-block;

            a {
                color: #606060;
                text-decoration: none;
                font-size: 2rem;
                padding: .8rem 5rem;

                &.active {
                    color: white;
                    background-color: #98999A;
                }
            }
        }
    }
</style>