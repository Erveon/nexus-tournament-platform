<template>
    <div class="page-wrapper">
        <div class="page">
            <card v-if="tournament">{{ tournament.name }}</card>
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
