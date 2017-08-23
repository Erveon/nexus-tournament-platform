<template>
    <div class="page-wrapper">
        <div class="page">
            <component-selector :tabs="tabs"></component-selector>
        </div>
    </div>
</template>

<script>
    import PlayerRanks from '@/components/rankings/PlayerRanks';
    import TeamRanks from '@/components/rankings/TeamRanks';

    export default {
        name: 'rankings-page',
        data() {
            return {
                tabs: [
                    { title: "Players", component: PlayerRanks },
                    { title: "Teams", component: TeamRanks },
                ]
            };
        }
    }
</script>

<style lang="scss" scoped>

</style>