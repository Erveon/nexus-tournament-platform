<template>
    <div id="rightbar">
        <ul class="nav">
            <li>
                <a @click.prevent="selectFriends()" :class="{ active: component === components.friendlist }">Friends</a>
            </li>
            <li>
                <a @click.prevent="selectTeams()" :class="{ active: component === components.teamlist }">Teams</a>
            </li>
        </ul>
        <component :is="component"></component>
    </div>
</template>

<script>
    import Friendbar from '@/components/core/rightbar/FriendBar';
    import Teambar from '@/components/core/rightbar/Teambar';

    export default {
        name: 'rightbar',
        data() {
            return {
                components: {
                    friendlist: Friendbar,
                    teamlist: Teambar
                },
                component: Friendbar
            };
        },
        methods: {
            selectTeams() {
                this.component = this.components.teamlist;
            },
            selectFriends() {
                this.component = this.components.friendlist;
            }
        }
    }
</script>

<style lang="scss" scoped>
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
            margin-bottom: 3px;
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
                    cursor: pointer;

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

    @media(max-width: 1300px) {
        #rightbar {
            margin-right: -25rem;
        }
    }
</style>
