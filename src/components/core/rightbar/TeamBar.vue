<template>
    <div id="teams">
        <template v-if="username">
        <a class="create" @click.prevent="createTeam()">Create Team</a>
        </template>
        <template v-else>
            <span class="signin">Log in to access your teams</span>
        </template>
    </div>
</template>

<script>
    import account from '@/services/account.service';

    export default {
        name: 'teambar',
        data() {
            return {
                username: account.username
            };
        },
        methods: {
            createTeam() {
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

    #teams {
        text-align: center;

        .create {
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
        #teams {
            ul li:hover {
                background-color: #23323f;
            }

            .create {
                color: white;
                background-color: #23323f;

                &:hover {
                    background-color: #273744;
                }
            }
        }
    }
</style>
