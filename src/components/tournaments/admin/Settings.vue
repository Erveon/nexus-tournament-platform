<template>
    <card>
        <form id="tournament-form" class="options">
            <h4>General information</h4>
            <div class="row">
                <div class="twelve columns">
                    <label for="name">Tournament name</label>
                    <input v-model="name" v-validate="'required'" type="text" name="name" id="name" placeholder="Name" class="twelve columns" />
                    <span class="error twelve columns" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="prizepool">Prizepool</label>
                    <input v-model="prizepool" v-validate="'required'" type="number" name="prizepool" min="0" id="prizepool" placeholder="Prize" class="twelve columns" />
                    <span class="error twelve columns" v-show="errors.has('prizepool')">{{ errors.first('prizepool') }}</span>
                </div>
                <div class="six columns">
                    <label for="format">Format</label>
                    <input v-model="format" v-validate="'required'" type="number" name="format" min="1" max="4" id="format" placeholder="Format" class="twelve columns" />
                    <span class="error twelve columns" v-show="errors.has('format')">{{ errors.first('format') }}</span>
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="tourneystart">Tournament start</label>
                    <flatpickr v-model="tourneystart" class="twelve columns" name="tourneystart" id="tourneystart" placeholder="Tournament start" :config="{ enableTime: true }"></flatpickr>
                    <span class="error twelve columns" v-show="errors.has('tourneystart')">{{ errors.first('tourneystart') }}</span>
                </div>
                <div class="six columns">
                    <label for="checkinstart">Check-in start</label>
                    <flatpickr v-model="checkinstart" class="twelve columns" name="checkinstart" id="checkinstart" placeholder="Check-in start" :config="{ enableTime: true }"></flatpickr>
                    <span class="error twelve columns" v-show="errors.has('checkinstart')">{{ errors.first('checkinstart') }}</span>
                </div>
            </div>
            <h4>Options</h4>
            <div class="row">
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input v-model="published" type="checkbox" name="published"> 
                        <label><i class="mdi mdi-check"></i> Published</label>
                    </div>
                </div>
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input v-model="invitational" type="checkbox" name="invitational"> 
                        <label><i class="mdi mdi-check"></i> Invitational</label>
                    </div>
                </div>
            </div>
            <div class="row buttons">
                <div class="pull-right">
                    <router-link href="cancel" to="/admin/tournaments" class="cancel">Cancel</router-link>
                    <a @click.prevent="submitForm()" class="btn btn-primary">{{ submit }}</a>
                </div>
            </div>
        </form>
    </card>
</template>

<script>
    import axios from 'axios';
    import $ from 'jquery';

    export default {
        name: 'tournament-create',
        data() {
            return {
                name: '',
                prizepool: 0,
                format: 3,
                published: false,
                invitational: false,
                checkinstart: '',
                tourneystart: '',
                submit: 'Create'
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            if(this.id) this.submit = "Save changes";
            this.load();
        },
        methods: {
            getTournament(id) {
                return axios.get(`/api/tournaments/${id}`)
                .then(res => {
                    let tournament = res.data;
                    this.name = tournament.name;
                    this.tourneystart = tournament.data.tourneystart;
                    this.prizepool = tournament.data.prizepool;
                    this.checkinstart = tournament.data.checkinstart;
                    this.published = tournament.data.published;
                    this.invitational = tournament.data.invitational;
                });
            },
            getValues() {
                return {
                    name: this.name,
                    data: {
                        prizepool: this.prizepool,
                        tourneystart: this.checkinstart,
                        checkinstart: this.tourneystart,
                        published: this.published,
                        invitational: this.invitational 
                    }
                };
            },
            load() {
                return new Promise((resolve, reject) => {
                    if(this.id) {
                        this.getTournament(this.id)
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
            submitForm() {
                this.$validator.validateAll().then(valid => {
                    if(valid && this.checkinstart !== '' && this.tourneystart !== '') {
                        axios.post(`/api/tournaments`, this.getValues())
                        .then(res => {
                            this.$router.push('/admin/tournaments/' + res.data.id);
                        });
                    } 
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .error {
        background-color: #c0392b;
        padding: .5rem 2rem;
        margin-bottom: 10px;
        color: white;
    }

    .options {
        margin: 0 auto;
        max-width: 700px;
    }

    .dark-theme a {
        color: white !important;
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
