<template>
    <component-selector :tabs="tabs"></component-selector>
</template>

<script>
import TournamentList from './tournamentlist/TournamentList';

export default {
    name: "tournaments",
    data() {
        return {
            tabs: [
                { title: "Tournaments", component: TournamentList },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
  
</style>
