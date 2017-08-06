<template>
    <component-selector :tabs="tabs"></component-selector>
</template>

<script>
import Feed from './newsfeed/Feed';
import Announcements from './announcements/Announcements';

export default {
    name: "news",
    data() {
        return {
            tabs: [
                { title: "Announcements", component: Announcements },
                { title: "Feed", component: Feed }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>

</style>
