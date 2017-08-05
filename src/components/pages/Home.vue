<template>
    <div class="home">
        <div class="row">
            <news class="eight columns"></news>
            <next-tournament class="four columns"></next-tournament>
        </div>
    </div>
</template>

<script>
    import News from '@/components/news/News';
    import NextTournament from '@/components/widgets/NextTournament';

    export default {
        name: 'home',
        data() {
            return { };
        },
        components: {
            'news': News,
            'next-tournament': NextTournament
        }
    };
</script>

<style scoped></style>
