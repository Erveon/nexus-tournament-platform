<template>
    <card>
        <form id="tournament-form" class="options">
            <h4>General information</h4>
            <div class="row">
                <div class="nine columns">
                    <label for="tourneyname">Tournament name</label>
                    <input type="text" name="tourneyname" id="tourneyname" placeholder="Name" class="twelve columns" />
                </div>
                <div class="three columns">
                    <label for="prizepool">Prizepool</label>
                    <input type="number" name="prizepool" min="0" id="prizepool" placeholder="Prize" class="twelve columns" />
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="tourneystart">Tournament start</label>
                    <flatpickr class="twelve columns" name="tourneystart" id="tourneystart" v-model="tourneystart" placeholder="Tournament start" :config="{ enableTime: true }"></flatpickr>
                </div>
                <div class="six columns">
                    <label for="checkinstart">Check-in start</label>
                    <flatpickr class="twelve columns" name="checkinstart" id="checkinstart" v-model="checkinstart" placeholder="Check-in start" :config="{ enableTime: true }"></flatpickr>
                </div>
            </div>
            <h4>Options</h4>
            <div class="row">
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input type="checkbox" name="published"> 
                        <label><i class="mdi mdi-check"></i> Published</label>
                    </div>
                </div>
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input type="checkbox" name="invitational"> 
                        <label><i class="mdi mdi-check"></i> Invitational</label>
                    </div>
                </div>
            </div>
            <div class="row buttons">
                <div class="pull-right">
                    <router-link href="cancel" to="/admin/tournaments" class="cancel">Cancel</router-link>
                    <a href="submit" @click.prevent="submitForm()" class="btn btn-primary">{{ submit }}</a>
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
                tourneystart: '',
                checkinstart: '',
                submit: 'Create'
            }
        },
        methods: {
            submitForm() {
                let data = $("#tournament-form").serialize();
                axios.post(`/api/tournaments`, data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .options {
        margin: 0 auto;
        max-width: 700px;
    }

    .inline {
        display: inline-block;
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
