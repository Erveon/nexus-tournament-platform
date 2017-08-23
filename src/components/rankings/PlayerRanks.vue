<template>
    <card v-if="players">
        <div class="players">
            <router-link class="player" v-for="player in players" :key="player.username" :to="'/user/' + player.username">
                {{ player.username }}
            </router-link>
        </div>
    </card>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'player-page',
        data() {
            return {
                players: null
            };
        },
        mounted() {
            this.getPlayers();
        },
        methods: {
            getPlayers() {
                axios.get(`/api/players/list/0/25`)
                .then(res => this.players = res.data);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .player {
        display: inline-block;
        text-decoration: none;
        background-color: #F0F5F9;
        padding: 1rem 3rem;
        margin: .5rem 1rem;
        color: black;
        transition: .4s;
        max-width: 150px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
            background-color: #f9fbfc;
        }
    }

    .dark-theme .player {
        background-color: #272E3D;
        color: white;

        &:hover {
            background-color: #253644;
        }
    }
</style>
