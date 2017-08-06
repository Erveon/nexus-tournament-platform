<template> 
    <card class="news-item">
        <div class="top">
            <span class="title">{{ title }}</span>
            <span class="by">by {{ by }}</span>
            <span class="at">{{ at.format("MMMM Do YYYY") }}</span>
        </div>
        <div class="content">
            <slot></slot> <router-link to="/announcement/1" class="more">Read more</router-link>
        </div>
        <!--<hr />-->
    </card>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            title: { type: String, default: 'News' },
            by: { type: String, default: 'Erveon' },
            at: { default: moment() }
        },
        name: "news-item"
    }
</script>

<style lang="scss" scoped>
    .news-item {
        position: relative;

        .title {
            font-size: 2.4rem;
        }

        .by {
            font-size: 1.4rem;
            font-weight: lighter;
        }

        .at {
            font-size: 1.3rem;
            float: right;
            color: #919191;
        }

        .content {
            margin-bottom: 1rem;
        }

        hr {
            margin: 0;
            border-top: 1px solid #E1E1E1;
        }

        .more {
            cursor: pointer;
            margin-left: .5rem;
        }
    }

    .dark-theme hr {
        border-top: 1px solid #878787;
    }
</style>
