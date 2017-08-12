<template>
    <div>
        <announcement-item v-for="item in posts" :key="item.id" :title="item.title" :by="item.by" :at="item.at" :id="item.id">
            <div v-html="item.content"></div>
        </announcement-item>
    </div>
</template>

<script>
    import AnnouncementItem from './AnnouncementItem';
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "announcements",
        data() {
            return { posts: [] };
        },
        mounted() {
            this.getPosts(0, 5);
        },
        methods: {
            getPosts(page, amount) {
                axios.get(`/api/news/list/${page}/${amount}`)
                .then(response => this.posts = response.data);
            },
        },
        components: {
            'announcement-item': AnnouncementItem
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
