<template>
    <div v-if="user" class="userpage">
        <div class="header">
            <div class="userbar">
                <span class="picture"></span>
                <span class="username">{{ user.username }}</span>
            </div>
        </div>
        <div class="usernav">
            <ul>   
                <li><router-link class="active" :to="'/user/' + user.username + '/profile'">Profile</router-link></li>
                <li><router-link :to="'/user/' + user.username + '/tournaments'">Tournaments</router-link></li>
                <li><router-link :to="'/user/' + user.username + '/teams'">Teams</router-link></li>
            </ul>
        </div>
        <div class="page">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'user',
        data() {
            return {
                user: undefined
            };
        },
        beforeMount() {
            let user = this.$route.params.username;
            this.fetchUser(user);
        },
        methods: {
            fetchUser(user) {
                axios.get(`/api/account/${user}`)
                .then(res => {
                    this.user = res.data;
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .userpage {
        margin: 0 auto;
        max-width: 1100px;
        
        .header {
            background-image: url('./pattern.png');
            background-size: 130px;
            height: 15vh;
            position: relative;

            .userbar {
                position: absolute;
                bottom: 0;
                color: white;
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;

                .picture {
                    background-image: url('./sociallogo.jpg');
                    background-size: cover;
                    border: 2px solid #1B2936;
                    margin-left: 2rem;
                    display: inline-block;
                    position: absolute;
                    bottom: .8rem;
                    height: 10rem;
                    width: 10rem;
                    background-color: white;
                }

                .username {
                    font-size: 4rem;
                    margin-left: 14rem;
                }
            }
        }

        .usernav {
            ul {
                list-style-type: none;
                background-color: #1B2936;
                margin: 0;
                font-size: 0;

                li {
                    display: inline-block;
                    margin: 0;

                    a {
                        display: inline-block;
                        height: 6rem;
                        line-height: 6rem;
                        padding: 0 2.4rem;
                        font-size: 1.8rem;
                        color: white;
                        text-decoration: none;
                        background-color: transparent;
                        transition: .4s;

                        &.active, &:hover {
                            background-color: #272e3d;
                        }
                    }
                }
            }
        }

        .page {
            margin-top: 1vh;
            height: 20vh;
            background-color: #1B2936;
        }
    }
</style>