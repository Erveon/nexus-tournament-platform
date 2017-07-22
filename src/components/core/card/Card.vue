<template>
    <div class="card">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "card"
    }
</script>

<style lang="scss" scoped>
    .card {
        padding: 3rem;
        background-color: white;
        border: 1px solid #E4E2E2;
        margin-bottom: 2rem;
    }
</style>