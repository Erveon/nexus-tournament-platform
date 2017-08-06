<template>
    <div>
        <news-item v-for="item in news" :key="item.title" :title="item.title" :by="item.by" :at="item.at">
            {{ truncate(item.content, 250) }}<template v-if="item.content.length > 250">..</template>
        </news-item>
    </div>
</template>

<script>
    import NewsItem from '../items/NewsItem';
    import moment from 'moment';

    export default {
        name: "announcements",
        data() {
            return {
                news: [
                    {
                        title: 'Everyone\'s fired',
                        by: 'kerrytaz',
                        at: moment(),
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                    },
                    {
                        title: 'New website',
                        by: 'Erveon',
                        at: moment(),
                        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
                    },
                    {
                        title: 'You\'re a cunt',
                        by: 'Panda',
                        at: moment(),
                        content: `quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
                    }
                ]
            };
        },
        methods: {
            truncate(content, length) {
                return content.substring(0, length);
            }
        },
        components: {
            'news-item': NewsItem
        }
    }
</script>

<style lang="scss" scoped>
  
</style>
