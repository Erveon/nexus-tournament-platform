<template>
    <card id="announcement-edit" v-if="post">
        <form>
            <div class="row">
                <label for="announcement-title">Title</label>
                <input name="title" type="text" class="u-full-width" placeholder="Title" id="announcement-title" :value="post.title" />
            </div>
            <div class="row">
                <label for="announcement-body">Body</label>
                <ckeditor name="body" class="u-full-width" id="announcement-body" :value="post.content"></ckeditor>
            </div>
            <div class="row buttons">
                <div class="pull-right">
                    <a href="cancel" class="cancel">Cancel</a>
                    <a href="submit" class="btn btn-primary">Save changes</a>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';

    export default {
        name: "news-edit",
        mounted() {
            let id = this.$route.params.id;
            this.getPost(id);
        },
        methods: {
            getPost(id) {
                axios.get(`/api/news/${id}`)
                .then(res => {
                    this.post = res.data;
                });
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
    .dark-theme a {
        color: white !important;
    }

    .ckeditor {
        color: black !important;
    }
    
    a.cancel {
        text-decoration: none;
        color: #1c1c1c;
        padding: .2rem 1rem;
    }

    input {
        color: black;
    }

    .buttons {
        display: block;
        font-size: 1.7rem;
        margin-top: 2.5rem;
    }
</style>
