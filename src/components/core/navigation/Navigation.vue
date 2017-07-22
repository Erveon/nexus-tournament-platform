<template>
    <div id="navigation">
        <ul>
            <item :key="route.label" v-for="route in routes" :route="route"></item>
        </ul>
    </div>
</template>

<script>
    import Route from './Route';
    import Item from './Item';

    export default {
        name: "navigation",
        components: {
            'item': Item
        },
        data() {
            return {
                routes: [
                    new Route("/", "Home", "home"),
                    new Route("/tournaments", "Tournaments", "trophy"),
                    new Route("/players", "Players", "user"),
                    new Route("/teams", "Teams", "users"),
                    new Route("/join", "Join staff", "wheelchair")
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>