<template>
    <div id="sidebar">
        <account></account>
        <navigation></navigation>
        <!-- Feedback -->
    </div>
</template>

<script>
    import Account from '@/components/core/sidebar/Account';
    import Navigation from '@/components/core/navigation/Navigation';

    export default {
        name: "sidebar",
        components: {
            'navigation': Navigation,
            'account': Account
        },
        data() {
            return { };
        }
    };
</script>

<style lang="scss" scoped>
    #sidebar {
        z-index: 100;
        width: 25rem;
        position: absolute;
        height: 100%;
        background-color: #1B2936;
        margin-left: 0;
        transition: 0.4s;
    }

    body.collapsed-sidebar #sidebar {
        margin-left: -25rem;
    }
</style>