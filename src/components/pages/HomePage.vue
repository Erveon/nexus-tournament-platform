<template>
    <div class="page-wrapper">
        <div class="page">
            <div class="row">
                <news class="eight columns"></news>
                <div class="sidebar four columns">
                    <next-tournament></next-tournament>
                    <tournament-winners></tournament-winners>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import News from '@/components/news/News';
    import NextTournament from '@/components/widgets/NextTournament';
    import TournamentWinners from '@/components/widgets/TournamentWinners';

    export default {
        name: 'home-page',
        data() {
            return { };
        },
        components: {
            'news': News,
            'next-tournament': NextTournament,
            'tournament-winners': TournamentWinners
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        padding: 3rem 5rem;
    }
</style>
