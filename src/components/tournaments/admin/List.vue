<template>
    <card>
        <div class="top">
            <span>{{ tournaments.length }} Tournaments</span>
            <router-link class="btn btn-primary pull-right" to="/admin/tournaments/create">New tournament</router-link>
        </div>
        <ul>
            <li v-for="item in tournaments" :key="item.id">
                <router-link :to="routeFor(item)">
                    <span class="title">{{ item.title }} </span>
                    <span class="by">by {{ item.by }} </span>
                    <span class="at">{{ time(item.at) }}</span>
                    <div class="options pull-right">
                        <i @click.prevent="remove(item)" class="fa fa-trash" aria-hidden="true"></i>
                    </div>
                </router-link>
            </li>
        </ul>
    </card>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    
    export default {
        name: 'tournament-admin',
        data() {
            return { tournaments: [] };
        },
        created() {
            this.getTournaments(0, 20);
        },
        methods: {
            getTournaments(page, amount) {
                axios.get(`/api/tournaments/list/${page}/${amount}`)
                .then(response => this.posts = response.data);
            },
            routeFor(tournament) {
                return `/admin/tournaments/${tournament.id}`;
            },
            time(at) {
                return moment(at).format("lll");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
