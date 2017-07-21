<template>
    <div class="tournaments">
        <p>Hey {{ test }}</p>
    </div>
</template>

<script>
export default {
    name: 'tournaments',
    data() {
        return {
            test: 'Testing',
        };
    },
};
</script>

<style scoped>
    p {
        font-style: italic;
    }
</style>