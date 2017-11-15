<template>
    <div class="page-wrapper">
        <div class="page-wrapper">
            <div class="page row">
                <card class="sub-nav" :padding="0">
                    <ul>
                        <li><router-link :to="'/tournaments/' + tournament.id + '/about'" exact>About</router-link></li>
                        <li><router-link :to="'/tournaments/' + tournament.id + '/bracket'" exact>Bracket</router-link></li>
                        <li><router-link :to="'/tournaments/' + tournament.id + '/match'" exact>My match</router-link></li>
                    </ul>
                </card>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'tournament-create',
        data() {
            return {
                tournament: null
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            if(this.id) this.load();
            else this.$router.push(`/tournaments/`);
        },
        methods: {
            load() {
                return new Promise((resolve, reject) => {
                    axios.get(`/api/tournaments/${this.id}`)
                    .then(res => {
                        this.tournament = res.data;
                        resolve();
                    });
                });
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>
