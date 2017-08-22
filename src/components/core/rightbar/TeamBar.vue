<template>
    <div id="teams">
        <a class="create" @click.prevent="createTeam()">Create Team</a>
    </div>
</template>

<script>
    export default {
        name: 'teambar',
        methods: {
            createTeam() {
                alert('In development');
            }
        }
    }
</script>

<style lang="scss" scoped>
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
