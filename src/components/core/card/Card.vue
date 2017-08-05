<template>
    <div>
        <card-title>{{ title }}</card-title>
        <div :class="{ card: frame }" :style="'padding: '+ padding +'rem'">
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
            padding: { type: Number, default: 2 }
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
        background-color: white;
        border: 1px solid #E4E2E2;
        margin-bottom: 2rem;
    }

    .dark-theme .card {
        color: white;
        background-color: #1B2936;
        border: 1px solid #1e1e1e;
    }
</style>