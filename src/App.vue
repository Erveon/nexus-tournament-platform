<template>
    <div id="app">
        <div v-if="canaccess">
            <sidebar></sidebar>
            <main-view></main-view>
            <modals></modals>
        </div>
        <div v-else>
            <password-page></password-page>
        </div>
    </div>
</template>

<script>
    import PasswordPage from '@/components/pages/PasswordPage';
    import Tester from '@/services/tester.service';
    import axios from 'axios';

    export default {
        name: 'app',
        beforeMount() {
            //this.warn();
        },
        data() {
            return {
                canaccess: Tester.authenticated
            }
        },
        methods: {
            warn() {
                console.log("%cStop! Don't paste anything in here under any circumstances. People may be trying to steal your account.", "font-family: 'open sans', sans-serif; background: red; color: yellow; font-size: x-large;");
            }
        },
        components: {
            "password-page": PasswordPage
        }
    };
</script>

<style lang="scss">
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #F0F5F9;
    }

    @media(max-width: 800px) {
        #overlay {
            z-index: 99;
            position: fixed;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .collapsed-sidebar #overlay {
            display: none;
        }
    }

    body.dark-theme {
        background-color: #121E29;
    }

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: "Open Sans", sans-serif;
    }

    img {
        display: block;
        margin: 0 auto;
    }

    .btn {
        cursor: pointer;
        color: white;
        padding: .5rem 1.4rem;
        text-decoration: none;
        transition: 0.3s;
        border-radius: .3rem;
        font-size: 1.5rem;
        background-color: #939393;
        border-bottom: .3rem solid #828282;

        &:hover {
            color: white;
            background-color: #aaaaaa;
            border-bottom: .3rem solid #8e8e8e;
        }
    }

    .btn-primary {
        background-color: #2980B9;
        border-bottom: .3rem solid #165B88;

        &:hover {
            background-color: #399bdb;
            border-bottom: .3rem solid #267cb5;
        }
    }

    .userlink {
        color: black;
        font-weight: bold;
        text-decoration: none;
    }

    .dark-theme input {
        color: black;
    }

    .dark-theme .userlink {
        color: white;
    }

    .page-wrapper {
        margin: 3rem auto 0 auto;
        padding: 0 3rem;

        .page {
            max-width: 1200px;
            margin: 3rem auto;
        }
    }

    input[type="email"], input[type="number"], input[type="search"], 
    input[type="text"], input[type="tel"], input[type="url"], input[type="password"], 
    textarea, select {
        border-radius: 2px;
    }

    label {
        font-weight: normal;
    }

    .pretty label i {
        background-color: white;

        &:after {
            width: 15px;
            height: 15px;
        }
    }

    .sub-nav {
        ul {
            font-size: 0;
            padding: 0;
            margin: 0;
            list-style-type: none;
            height: 5rem;
            line-height: 5rem;
            
            li {
                font-size: 1.4rem;
                display: inline-block;
                margin: 0;

                a {
                    border-right: 1px solid lightgrey;
                    padding: 0 2rem;
                    display: block;
                    height: 100%;
                    text-decoration: none;
                    color: #1c1c1c;

                    &.active {
                        background-color: #f7f7f7;
                    }
                }
            }
        }

        .content {
            height: 50rem;
        }
    }

    
    .dark-theme {
        .sub-nav ul li a {
            color: white !important;
            border-right: 1px solid #272e3d !important;

            &.active {
                background-color: #272E3D !important;
            }
        }
    }
</style>
