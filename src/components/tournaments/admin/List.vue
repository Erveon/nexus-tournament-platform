<template>
    <card>
        <div class="top">
            <span>{{ tournaments.length }} Tournaments</span>
            <router-link class="btn btn-primary pull-right" to="/admin/tournaments/create">New tournament</router-link>
        </div>
        <ul>
            <li v-for="item in tournaments" :key="item.id">
                <router-link :to="routeFor(item)">
                    <span class="title">{{ item.name }} </span>
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
                .then(response => this.tournaments = response.data);
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
    .dark-theme {
        li a {
            background-color: #272e3d !important;
            color: white !important;
        }
    }

    .options {
        font-size: 1.8rem;

        i {
            padding: 0 1rem;
            transition: .2s;
            width: 2rem;

            &:hover {
                transform: scale(1.3);
            }
        }
    }

    .top {
        width: 100%;
        height: 4rem;
    }

    ul {
        margin: 0;
        list-style-type: none;

        li {
            display: block;

            a {
                color: #1c1c1c;
                text-decoration: none;
                background-color: #f7f7f7;
                padding: 2rem;
                display: block;
            }

            .title {
                font-style: italic;
            }

            .at {
                font-size: 1.2rem;
            }
        }
    }
</style>
