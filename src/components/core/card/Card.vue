<template>
    <div>
        <card-title>{{ title }}</card-title>
        <div :class="{ card: frame, background: bgcolor }" :style="'padding: '+ padding +'rem; height: ' + height">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import CardTitle from '@/components/core/card/CardTitle';

    export default {
        props: {
            title: { type: String },
            frame: { type: Boolean, default: true },
            padding: { type: Number, default: 2 },
            bgcolor: { type: Boolean, default: true },
            height: { type: String, default: 'auto' }
        },
        name: "card",
        components: {
            "card-title": CardTitle
        },
        created() {

        }
    }
</script>

<style lang="scss" scoped>
    .card {
        color: #444444;
        border: 1px solid #E4E2E2;
        margin-bottom: 2rem;
        border-radius: 4px;
        position: relative;

        &.background {
            background-color: white;
        }
    }

    .dark-theme .card {
        color: white;
        border: 1px solid #121c26;

        &.background {
            background-color: #1B2936;
        }
    }
</style>