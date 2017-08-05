<template>
    <div class="tournaments">
        <card title="Tournaments">
            <p>Hey, {{ test }}</p>
        </card>
    </div>
</template>

<script>
    export default {
        name: 'tournaments',
        data() {
            return {
                test: 'just testing',
            };
        },
    };
</script>

<style scoped>
    p {
        font-size: 2rem;
    }
</style>