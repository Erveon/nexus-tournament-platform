<template>
    <card>
        <div class="options">
            <h4>General information</h4>
            <div class="row">
                <div class="nine columns">
                    <label for="tourneyname">Tournament name</label>
                    <input type="text" id="tourneyname" placeholder="Name" class="twelve columns" />
                </div>
                <div class="three columns">
                    <label for="prizepool">Prizepool</label>
                    <input type="number" id="prizepool" placeholder="Prize" class="twelve columns" />
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <label for="tourneystart">Tournament start</label>
                    <flatpickr class="twelve columns" id="tourneystart" v-model="tourneystart" placeholder="Tournament start" :config="{ enableTime: true }"></flatpickr>
                </div>
                <div class="six columns">
                    <label for="checkinstart">Check-in start</label>
                    <flatpickr class="twelve columns" id="checkinstart" v-model="checkinstart" placeholder="Check-in start" :config="{ enableTime: true }"></flatpickr>
                </div>
            </div>
            <h4>Options</h4>
            <div class="row">
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input type="checkbox"> 
                        <label><i class="mdi mdi-check"></i> Published</label>
                    </div>
                </div>
                <div class="twelve columns">
                    <div class="pretty primary">
                        <input type="checkbox"> 
                        <label><i class="mdi mdi-check"></i> Invitational</label>
                    </div>
                </div>
            </div>
        </div>
    </card>
</template>

<script>
    export default {
        name: 'tournament-create',
        data() {
            return {
                tourneystart: '',
                checkinstart: ''
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
</style>
