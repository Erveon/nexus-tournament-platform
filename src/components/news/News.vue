<template>
    <div>
        <component-selector :tabs="tabs"></component-selector>
    </div>
</template>

<script>
import Feed from '@/components/news/Feed';
import Announcements from '@/components/news/Announcements';

export default {
    name: "news",
    data() {
        return {
            tabs: [
                { title: "Feed", component: Feed },
                { title: "Announcements", component: Announcements }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>

</style>
