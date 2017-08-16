<template>
    <card :padding=0 title="Next Tournament">
        <div class="next-tournament">
            <div class="info">
                <p class="title">
                    {{ title }}
                </p>
                <div class="time">
                    <span v-if="days > 0">{{days}}d</span>
                    <span v-if="hours > 0">{{hours}}h</span> 
                    <span v-if="minutes > 0">{{minutes}}m</span>
                    {{seconds}}s
                </div>
            </div>
        </div>
    </card>
</template>

<script>

export default {
    name: "next-tournament",
    created() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        }, 1000);
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            date: Math.trunc(Date.parse("May 3, 2018 12:00:00 AM GMT+2") / 1000),
            title: "Erveon's Birthday"
        }
    },
    computed: {
        seconds() {
            return (this.date - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24);
        }
    }
}
</script>

<style lang="scss" scoped>
    .next-tournament {
        cursor: pointer;
        padding: 2rem;
        color: white;
        font-size: 2.2rem;
        position: relative;
        background-image: url(https://s3-us-west-1.amazonaws.com/patreon-reward-images/1300113.jpeg);
        background-position: bottom right;

        .info {
            text-shadow: 0 0 3px black;
            display: block;
            text-align: center;

            .title {
                display: block;
                font-weight: bold;
                margin: 0;
            }

            .time {
                display: block;
                font-weight: lighter;
            }
        }
        
    }
</style>
