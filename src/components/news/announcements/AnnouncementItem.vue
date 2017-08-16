<template> 
    <card class="news-item">
        <div class="top">
            <router-link :to='fullPost()' class="title">{{ title }}</router-link>
            <span class="by">by <router-link :to="'/user/' + by" class="userlink">{{ by }}</router-link></span>
            <span class="at">{{ time(at).format("MMMM Do YYYY") }}</span>
        </div>
        <div class="content" :class="{ expanded: expanded }">
            <slot></slot>
            <div @click.prevent="toggle()" class="readmore">{{ read }}</div>
        </div>
    </card>
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            id: { type: Number },
            title: { type: String, default: 'News' },
            by: { type: String, default: 'Erveon' },
            at: { default: undefined }
        },
        name: "news-item",
        data() {
            return {
                expanded: false,
                read: 'Read more'
            };
        },
        methods: {
            toggle() {
                this.expanded = !this.expanded;
                this.read = this.expanded ? 'Read less' : 'Read more';
            },
            time(at) {
                return moment(at);
            },
            fullPost() {
                let title = this.title
                                .replace(new RegExp(" ", "g"), '_')
                                .replace(/\W/g, '')
                                .replace(new RegExp("_", "g"), '-')
                                .toLowerCase();
                return `/announcement/${this.id}-${title}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        margin: 0;
        max-height: 5vh;
        overflow: hidden;
    }

    .content.expanded {
        max-height: 1000px;

        .readmore {
            position: relative;
            line-height: normal;
            background-color: initial;
        }
    }

    .readmore {
        cursor: pointer;
        text-align: center;
        line-height: 5rem;
        opacity: .7;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fcfcfc;
    }

    .dark-theme .readmore {
        background-color: #16222d;
    }

    .news-item {
        position: relative;

        .top {
            margin-bottom: 1rem;
        }

        .title {
            text-decoration: none;
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
