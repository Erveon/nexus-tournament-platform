<template>
    <div id="navigation">
        <ul>
            <item :key="route.label" v-for="route in routes" :route="route" v-if="level >= route.level"></item>
        </ul>
    </div>
</template>

<script>
    import { EventBus } from '@/eventbus.js';
    import Account from '@/services/account.service';

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
                    new Route("/home", "Home", "home"),
                    new Route("/tournaments", "Tournaments", "trophy"),
                    new Route("/players", "Players", "user"),
                    new Route("/teams", "Teams", "users"),
                    new Route("/admin", "Admin", "star", 9),
                    new Route("/about", "About", "info-circle"),
                ],
                level: Account.level
            };
        },
        mounted() {
            EventBus.$on('authentication', () => {
                this.level = Account.level;
            });
        }
    };
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>