<template>
    <card id="announcement-edit" v-if="loaded">
        <form>
            <div class="row">
                <label for="announcement-title">Title</label>
                <input name="title" type="text" class="u-full-width" placeholder="Title" id="announcement-title" v-model="title" />
            </div>
            <div class="row">
                <label for="announcementbody">Body</label>
                <textarea name="body" class="u-full-width ckeditor" id="announcementbody" v-model="content"></textarea>
            </div>
            <div class="row buttons">
                <div class="pull-right">
                    <a href="cancel" @click.prevent="cancel()" class="cancel">Cancel</a>
                    <a href="submit" @click.prevent="submit()" class="btn btn-primary">{{ submit }}</a>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import $ from 'jquery';

    export default {
        name: "news-edit",
        data() {
            return { 
                title: '',
                content: '',
                id: undefined,
                loaded: false,
                submit: 'Create'
            };
        },
        mounted() {
            this.id = this.$route.params.id;
            if(this.id) this.submit = "Save changes";
            this.load().then(() => {
                CKEDITOR.replace('announcementbody');
            });
        },
        beforeRouteLeave(to, from, next) {
            for(name in CKEDITOR.instances)
                CKEDITOR.instances[name].destroy(true);
            next();
        },
        methods: {
            getPost(id) {
                return axios.get(`/api/news/${id}`)
                .then(res => {
                    this.title = res.data.title;
                    this.content = res.data.content;
                });
            },
            load() {
                return new Promise((resolve, reject) => {
                    if(this.id) {
                        this.getPost(this.id)
                        .then(() => {
                            this.loaded = true;
                            resolve();
                        });
                    } else {
                        this.loaded = true;
                        resolve();
                    }
                });
            },
            cancel() {
                this.$router.push('/admin/news');
            },
            submit() {
                let url = this.id ? `/api/news/${this.id}` : `/api/news/`;
                this.content = CKEDITOR.instances.announcementbody.getData();
                axios.post(url, {
                    title: this.title,
                    content: this.content
                }).then(() => {
                    this.cancel();
                });
            }
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
        font-size: 1.5rem;
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
