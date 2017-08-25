<template>
    <div id="friends">
        <template v-if="username">
            <!--<ul>
                <li>7ox</li>
                <li>TherawHunter14</li>
                <li>ZombieJC</li>
            </ul>-->
            <a class="add" @click.prevent="addFriend()">Add Friend</a>
        </template>
        <template v-else>
            <span class="signin">Log in to access your friends</span>
        </template>
    </div>
</template>

<script>
    import account from '@/services/account.service';

    export default {
        name: 'friendbar',
        data() {
            return {
                username: account.username
            };
        },
        methods: {
            addFriend() {
                alert('In development');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .signin {
        display: block;
        margin-top: 1rem;
    }

    #friends {
        text-align: center;

        ul {
            text-align: left;
            list-style-type: none;
            margin: .7rem 0;

            li {
                margin: 0;
                display: block;
                padding: .8rem 2rem;
                background-color: transparent;
                transition: .2s;

                &:hover {
                    background-color: #F0F5F9;
                    cursor: pointer;
                }
            }
        }

        .add {
            cursor: pointer;
            margin: 1rem;
            display: block;
            background-color: #F0F5F9;
            color: black;
            padding: .7rem 1.2rem;
            transition: .4s;

            &:hover {
                background-color: #e8eff4;
            }
        }

    }

    .dark-theme {
        #friends {
            ul li:hover {
                background-color: #23323f;
            }

            .add {
                color: white;
                background-color: #23323f;

                &:hover {
                    background-color: #273744;
                }
            }
        }
    }
</style>
