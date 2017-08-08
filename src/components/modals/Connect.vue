<template>
    <vodal :show="show" @showconnect="show = true" @hide="close" :closeButton="false" autoSizing>
        <ul>
            <li><a :class="{ active: login }" href="login" @click.prevent="switchLogin">Log in</a></li>
            <li><a :class="{ active: !login }" href="signup" @click.prevent="switchRegister">Sign up</a></li>
        </ul>
        <template class="tab login" v-if="login">
            <form>
                <div class="row">
                    <div class="twelve columns">
                        <label for="email">Email</label>
                        <input v-model="email" v-validate="'required|email'" class="u-full-width" type="email" name="email" placeholder="Your@email.com" ref="email" id="email" key="email-input">
                        <span class="error" v-show="submitted && errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                </div>
                <label for="login-password">Password</label>
                <input v-model="password" v-validate="'required'" class="u-full-width" type="password" name="password" placeholder="Password" ref="password" id="login-password" key="pass">
                <ladda :loading="submitting" @click.prevent="submit" class="button-primary u-full-width" data-style="zoom-in" type="submit">
                    Log in
                </ladda>
                <span id="wrong-credentials" class="error" v-show="submitted && errors.has('password')">{{ errors.first('password') }}</span>
            </form>
        </template>
        <template class="tab register" v-else>
            <template v-if="!registered">
                <form>
                    <div class="row">
                        <div class="six columns">
                            <label for="email">Email</label>
                            <input v-model="email" v-validate="'required|email'" class="u-full-width" type="email" name="email" placeholder="Your@email.com" ref="email" id="email" key="email-input">
                        </div>
                        <div class="six columns">
                            <label for="username">Username</label>
                            <input v-model="username" v-validate="'required'" class="u-full-width" type="text" name="username" placeholder="Username" ref="username" id="username">
                        </div>
                    </div>
                    <span class="error" v-show="submitted && errors.has('email')">{{ errors.first('email') }}</span>
                    <span class="error" v-show="submitted && errors.has('username')">{{ errors.first('username') }}</span>
                    <label for="password">Password</label>
                    <input v-model="password" v-validate="'required|min:6'" class="u-full-width" type="password" name="password" ref="password" placeholder="Password" id="password" key="pass">
                    <span class="error" v-show="submitted && errors.has('password')">{{ errors.first('password') }}</span>
                    <label for="repassword">Confirm password</label>
                    <input v-model="repassword" v-validate="'required|min:6|confirmed:password'" class="u-full-width" type="password" name="repassword" placeholder="Password" id="repassword" key="register-repass">
                    <span class="error" v-show="submitted && errors.has('repassword')">{{ errors.first('repassword') }}</span>
                    <ladda :loading="submitting" @click.prevent="submit" class="button-primary u-full-width" data-style="zoom-in" type="submit">
                        Sign up
                    </ladda>
                </form>
            </template>
            <template v-else>
                <div class="row">
                    Success! Check your emails to activate your account.
                </div>
            </template>
        </template>
    </vodal>
</template>

<script>
    import axios from 'axios';
    import { EventBus } from '../../eventbus.js';
    import $ from 'jquery';

    export default {
        name: 'connect',
        data() {
            return {
                show: false,
                login: true,
                submitting: false,
                submitted: false,
                registered: false,
                email: "",
                username: "",
                password: "",
                repassword: ""
            }
        },
        methods: {
            switchLogin() {
                if(this.submitting) return;
                this.login = true;
                this.focus();
            },
            switchRegister() {
                if(this.submitting) return;
                this.login = false;
                this.focus();
            },
            inputEnabled(bool) {
                this.submitting = !bool;
                $("input").prop('disabled', !bool);
            },
            submit() {
                this.submitted = true;
                if(this.errors.length > 0) return;
                this.inputEnabled(false);
                if(this.login) {
                    this.processLogin();
                } else {
                    this.processRegister();
                }
            },
            processLogin() {
                axios.post(`api/auth/login`, {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    let token = response.data.token;
                    localStorage.setItem('acc_token', token);
                    // TODO set bearer header in axios
                    this.inputEnabled(true);
                }).catch(err => {
                    this.errors.add('password', 'Email or password is incorrect');
                    this.inputEnabled(true);
                });
            },
            processRegister() {
                axios.post(`api/auth/register`, {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }).then(response => {
                    let data = response.data;
                    if(data.errors) {
                        data.errors.forEach(error => {
                            this.errors.add(error, `${error} is unavailable`);
                        });
                    } else {
                        this.registered = true;
                    }
                    this.inputEnabled(true);
                }).catch(error => {
                    this.inputEnabled(true);
                    alert("Something went wrong!");
                });
            },
            close() {
                if(this.submitting) return;
                this.show = false;
            },
            focus() {
                this.$nextTick(() => {
                    let email = this.$refs.email;
                    let username = this.$refs.username;
                    let password = this.$refs.password;
                    if(this.email.length === 0) {
                        email.focus();
                    } else {
                        if(!this.login && this.username.length === 0) {
                            username.focus();
                        } else {
                            password.focus();
                        }
                    }
                });
            }
        },
        mounted() {
            EventBus.$on('showconnect', () => {
                this.show = true;
                this.focus();
            });
        }
    }
</script>

<style lang="scss" scoped>
    #wrong-credentials {
        margin-top: 5px;
    }

    form {
        margin: 0;

        .button-primary {
            margin: 0;
        }

        .error {
            padding: 1rem;
            margin: -.5rem 0 .5rem 0;
            color: white;
            display: block;
            background-color: #c0392b;
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