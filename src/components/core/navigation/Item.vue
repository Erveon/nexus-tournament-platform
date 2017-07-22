<template>
    <li>
        <router-link :to="route.route" exact>
            <i :class="['fa', icon]" aria-hidden="true"></i>
            {{ route.label }}
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "item",
        props: [ "route" ],
        data() {
            return { 
                icon: 'fa-' + this.route.icon
            };
        }
    };
</script>

<style lang="scss" scoped>
    li {
        display: block;
        padding: 0;
        margin: 0;
    }

    a {
        display: block;
        text-decoration: none;
        height: 5rem;
        line-height: 5rem;
        color: #E5E5E5;
        padding-left: 4rem;

        i {
            width: 2rem;
        }

        &.active {
            background-color: #121E29;
        }
    }
</style>