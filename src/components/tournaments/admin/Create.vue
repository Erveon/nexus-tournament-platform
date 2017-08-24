<template>
    <card>
        <div class="row">
            <label for="tourneyname">Tournament name</label>
            <input type="text" id="tourneyname" placeholder="Name" class="twelve columns" />
        </div>
        <div class="row">
            <div class="four columns">
                <label for="tourneystart">Tournament start</label>
                <flatpickr class="twelve columns" id="tourneystart" v-model="tourneystart" placeholder="Tournament start" :config="{ enableTime: true }"></flatpickr>
            </div>
            <div class="four columns">
                <label for="checkinstart">Check-in start</label>
                <flatpickr class="twelve columns" id="checkinstart" v-model="checkinstart" placeholder="Check-in start" :config="{ enableTime: true }"></flatpickr>
            </div>
            <div class="four columns">
                <label for="checkinstop">Check-in end</label>
                <flatpickr class="twelve columns" id="checkinstop" v-model="checkinstop" placeholder="Check-in end" :config="{ enableTime: true }"></flatpickr>
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
                checkinstart: '',
                checkinstop: '',
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
