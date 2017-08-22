<template>
    <div id="rightbar">
        <ul class="nav">
            <li>
                <router-link class="active" to="nowhere">Friends</router-link>
            </li>
            <li>
                <router-link to="nowhere">Teams</router-link>
            </li>
        </ul>
        <ul class="friends">
            <li>ZombieJC</li>
            <li>7ox</li>
            <li>TherawHunter14</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'rightbar'
    }
</script>

<style lang="scss" scoped>

    .friends {
        list-style-type: none;
        margin: 0;

        li {
            margin: 0;
            display: block;
            padding: .8rem 2rem;

            &:hover {
                background-color: #23323f;
                cursor: pointer;
            }
        }
    }

    #rightbar {
        z-index: 100;
        width: 25rem;
        position: fixed;
        height: 100%;
        background-color: #fff;
        transition: 0.4s;
        right: 0;
        top: 0;

        .nav {
            margin: 0;
            list-style-type: none;
            font-size: 0;
            height: 5rem;
            line-height: 5rem;

            li {
                text-align: center;
                font-size: 1.6rem;
                display: inline-block;
                width: 50%;

                a {
                    display: block;
                    text-decoration: none;
                    color: black;

                    &.active {
                        border-bottom: 3px solid #156DAD;
                    }
                }
            }
        }
    }

    .dark-theme #rightbar {
        color: white;
        background-color: #1B2936;

        .nav li a {
            color: white;
        }
    }

    body.collapsed-rightbar #rightbar {
        margin-right: -25rem;
    }
</style>
