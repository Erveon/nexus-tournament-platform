<template>
    <card title="Last Tournament Winners" :padding="0">
        <div class="last-tournament-winners">
            <span class="winners">Not Erveon</span>
        </div>
    </card>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .last-tournament-winners {
        background-image: url(https://static.blog.playstation.com/wp-content/uploads/2017/02/RocketLeague.jpg);
        background-position: bottom right;
        text-align: center;
        padding: 4rem 0;

        .winners {
            text-shadow: 3px 3px 5px black;
            font-size: 3.5rem;
            color: white;
        }
    }
</style>
