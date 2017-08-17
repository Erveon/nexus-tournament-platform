<template>
    <div>
        <div v-if="user" class="userpage">
            <div class="header">
                <div class="bannerimg">
                    <img v-if="hasBackground" src="./images/bannerimg.png" />
                </div>
            </div>
            <div class="usernav-wrapper">
                <div class="usernav">
                    <div class="info">
                        <span class="picture"></span>
                        <span class="username">{{ user.username }}</span>
                    </div>
                    <ul>   
                        <li><a class="smallname">{{ user.username }}</a></li>
                        <li><router-link :to="'/user/' + user.username + '/profile'">Profile</router-link></li>
                        <li><router-link :to="'/user/' + user.username + '/tournaments'">Tournaments</router-link></li>
                        <li><router-link :to="'/user/' + user.username + '/teams'">Teams</router-link></li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <div v-if="notFound" class="notfound">
            <span>User '{{ $route.params.username }}' not found :(</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'user',
        data() {
            return {
                hasBackground: false,
                user: null,
                notFound: false
            };
        },
        beforeMount() {
            let user = this.$route.params.username;
            this.fetchUser(user);
        },
        methods: {
            fetchUser(user) {
                axios.get(`/api/account/${user}`)
                .then(res => this.user = res.data)
                .catch(err => this.notFound = true);
            }
        },
        watch: {
            '$route.params.username'(newname, oldname) {
                this.fetchUser(newname);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notfound {
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
    }

    .smallname {
        display: none !important;
    }

    .dark-theme .notfound {
        color: white;
    }

    .userpage {

        .header {
            transition: .2s;
            overflow: auto;
            position: relative;
            height: 300px;
            overflow: hidden;

            &:before {
                content: "";
                background-color: #556b7f;
                width: 100%;
                height: 100%;
                z-index: -2;
                position: absolute;
            }

            .bannerimg img {
                position: absolute;
                top: 0;
                width: 100%;
                z-index: -2;
                opacity: .5;
            }
        }

        .usernav-wrapper {
            border: 1px solid #E4E2E2;
            list-style-type: none;
            background-color: white;
            position: relative;
            padding: 0 3rem;

            .usernav {
                max-width: 1200px;
                margin: 0 auto;
            
                .info {
                    position: absolute;
                    bottom: 0;
                    width: 0;

                    .picture {
                        background-image: url('./images/sociallogo.jpg');
                        background-size: cover;
                        margin: 4rem auto 0 auto;
                        border-radius: 10px;
                        display: block;
                        height: 12rem;
                        width: 12rem;
                        position: absolute;
                        bottom: .8rem;
                        left: 0;
                    }

                    .username {
                        position: relative;
                        left: 15rem;
                        bottom: 6rem;
                        font-size: 5rem;
                        color: white;
                        text-shadow: 2px 2px 4px #333;
                    }
                }

                ul {
                    margin: 0 0 0 15rem;
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
                            color: black;
                            text-decoration: none;
                            background-color: transparent;
                            transition: .4s;

                            &.active:not(.smallname), &:hover:not(.smallname) {
                                background-color: #F0F5F9;
                            }
                        }
                    }
                }

            }
        }
    }

    .dark-theme .userpage {
        .usernav-wrapper {
            border: 1px solid #272e3d !important;
            background-color: #1B2936;

            a {
                color: white !important;

                &.active:not(.smallname), &:hover:not(.smallname) {
                    background-color: #272e3d !important;
                }
            }
        }

        .header:before {
            background-color: #0b141c !important;
        }
    }

    @media(max-width: 1200px) {
        .userpage .header {
            height: 280px;
        }
    }

    @media(max-width: 1100px) {
        .userpage .header {
            height: 260px;
        }
    }

    @media(max-width: 1000px) {
        .userpage {
            .header {
                height: 200px;
            }

            .info {
                display: none !important;
            }

            .usernav-wrapper {
                padding: 0;

                .usernav ul {
                    margin: 0 !important;

                    li {
                        text-align: center;
                        display: block !important;

                        a {
                            display: block !important;
                        }
                    }
                }
            }
        }
    }

    @media(max-width: 900px) {
        .userpage .header {
            height: 160px;
        }
    }

    @media(max-width: 800px) {
        .userpage .header {
            height: 140px;
        }
    }

    @media(max-width: 320px) {
        .userpage .header {
            height: 100px;
        }
    }
</style>