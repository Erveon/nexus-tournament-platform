<template>
    <div>
        <card-title>{{ title }}</card-title>
        <div :class="{ card: frame, background: bgcolor }" :style="'padding: '+ padding +'rem'">
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
            bgcolor: { type: Boolean, default: true }
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
        border-radius: 3px;

        &.background {
            background-color: white;
        }
    }

    .dark-theme .card {
        color: white;
        border: 1px solid #272e3d;

        &.background {
            background-color: #1B2936;
        }
    }
</style>