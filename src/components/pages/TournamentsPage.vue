<template>
    <div class="page-wrapper">
        <div class="page">
            <div class="row">
                <tournaments class="eight columns"></tournaments>
                <div class="sidebar four columns">
                    <next-tournament></next-tournament>
                    <tournament-winners></tournament-winners>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tournaments from '@/components/tournaments/Tournaments';
    import NextTournament from '@/components/widgets/NextTournament';
    import TournamentWinners from '@/components/widgets/TournamentWinners';

    export default {
        name: 'tournaments-page',
        data() {
            return { };
        },
        components: {
            'next-tournament': NextTournament,
            'tournament-winners': TournamentWinners,
            'tournaments': Tournaments
        }
    };
</script>

<style lang="scss" scoped>
    .tournaments {
        padding: 3rem 5rem;
    }
</style>