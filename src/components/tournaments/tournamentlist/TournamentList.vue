<template>
    <div>
        <div v-for="item in tournaments" :key="item.id">
            <card :padding="1" height="7rem">
                <span>{{ item.name }}</span>
                <router-link class="view" :to="routeFor(item)">View</router-link>
                <div class="background" :class="{defaultbackground: !item.data.background}" :style="getStyle(item)"></div>
            </card>
        </div>
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
                .then(response => {
                    console.log(response.data);
                    this.tournaments = response.data
                });
            },
            routeFor(tournament) {
                return `/tournaments/${tournament.id}`;
            },
            time(at) {
                return moment(at).format("lll");
            },
            getStyle(item) {
                if(item.data.background) 
                    return 'background-image: url(' + item.data.background + ');';
                else return '';
            }
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }

    @media(min-width: 1100px) {
        .background {
            z-index: 0;
            height: 100%;
            width: 30rem;
            position: absolute;
            top: 0; 
            right: 0;
            opacity: .8;
            background-position: left center;
            background-size: cover;
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
        }

        .defaultbackground {
            background-image: url(images/background.png);
        }
    }

    .view {
        z-index: 1;
        text-transform: uppercase;
        background-color: #2980B9;
        color: white;
        border-bottom: 3px solid #165B88;
        padding: .5rem 2.5rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        transition: .2s;

        &:hover {
            background-color: #4395CB;
        }
    }
</style>
