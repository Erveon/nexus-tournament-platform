<template>
    <div>
        <router-link :to="routeFor(item)" @click.prevent="viewTournament(item)" v-for="item in tournaments" :key="item.id">
            <card><span>{{ item.name }}</span></card>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "tournament-list",
        data() {
            return { tournaments: [] };
        },
        created() {
            this.getTournaments(0, 20);
        },
        methods: {
            getTournaments(page, amount) {
                axios.get(`/api/tournaments/list/${page}/${amount}`)
                .then(response => this.tournaments = response.data);
            },
            routeFor(tournament) {
                return `/tournaments/${tournament.id}`;
            },
            time(at) {
                return moment(at).format("lll");
            }
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
</style>
