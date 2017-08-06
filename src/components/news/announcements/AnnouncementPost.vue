<template>
    <div class="post-wrapper">
        <card>
            <div class="top">
                <div class="title">{{ post.title }}</div>
                <div class="info">by {{ post.by }} on {{ post.at.format("MMMM Do YYYY") }}</div>
            </div>
            <hr />
            <div class="content">
                {{ post.content }}
            </div>
            <a class="previous">Previous</a>
            <a class="next pull-right">Next</a>
        </card>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'announcement-post',
        data() {
            return { 
                post: {
                    title: 'This is an example announcement',
                    by: 'Erveon',
                    at: moment(),
                    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
                }
            };
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        text-align: center;

        .title {
            font-size: 3rem;
        }

        .info {
            font-size: 1.4rem;
            color: #919191;
        }
    }

    .content {
        margin-bottom: 2rem;
    }

    .previous, .next {
        display: inline-block;
    }

    .post-wrapper {
        margin: 0 auto;
        max-width: 800px;
    }
        
</style>
