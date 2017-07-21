<template>
    <div id="navigation">
        <ul>
            <li :key="route.label" v-for="route in routes">
                <router-link :to="route.route">{{route.label}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Route from './Route';
    export default {
        name: "navigation",
        data() {
            return {
                routes: [
                    new Route("/", "Home"),
                    new Route("/tournaments", "Tournaments")
                ]
            };
        }
    };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;

        li {
            padding: 0 .3em;
            display: inline-block;
        }
    }
</style>