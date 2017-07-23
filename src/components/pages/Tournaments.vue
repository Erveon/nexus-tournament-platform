<template>
    <div class="tournaments">
        <card>
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