<template>
    <div class="post-wrapper">
        <card v-if="post">
            <div class="top">
                <div class="title">{{ post.title }}</div>
                <div class="info">by <router-link :to="'/user/' + post.by" class="userlink">{{ post.by }}</router-link> <span class="time">{{ getTime(post.at) }}</span></div>
            </div>
            <hr />
            <div class="content" v-html="post.content"></div>
            <!--<a class="previous">Previous</a>
            <a class="next pull-right">Next</a>-->
        </card>
    </div>
</template>

<script>
    import axios from 'axios';
    import time from '@/services/time.service';

    export default {
        name: 'announcement-post',
        mounted() {
            let slug = this.$route.params.post;
            let id = slug.split('-')[0];
            this.getPost(id);
        },
        methods: {
            getPost(id) {
                axios.get(`/api/news/${id}`)
                .then(res => this.post = res.data);
            },
            getTime(at) {
                return time.format(at);
            }
        },
        data() {
            return { 
                post: null
            };
        }
    }
</script>

<style lang="scss" scoped>
    .dark-theme hr {
        border-top: 1px solid #3e485b !important;
    }

    .top {
        text-align: center;

        .title {
            font-size: 3rem;
        }

        .info {
            font-size: 1.4rem;
            color: #919191;
        }

        .time {
            font-size: 1.2rem;
        }
    }

    .content {
        margin-bottom: 2rem;
    }

    .previous, .next {
        display: inline-block;
    }

    .post-wrapper {
        padding: 3rem 5rem;
        margin: 0 auto;
        max-width: 800px;
    }
        
</style>
