<template>
    <div class="home">
        <div class="row">
            <news class="eight columns"></news>
            <div class="sidebar four columns">
                <next-tournament></next-tournament>
                <tournament-winners></tournament-winners>
            </div>
        </div>
    </div>
</template>

<script>
    import News from '@/components/news/News';
    import NextTournament from '@/components/widgets/NextTournament';
    import TournamentWinners from '@/components/widgets/TournamentWinners';

    export default {
        name: 'home',
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

<style scoped></style>
