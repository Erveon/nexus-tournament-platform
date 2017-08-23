<template>
    <div id="sidebar">
        <account></account>
        <navigation></navigation>
        <span class="by"><a href="https://erveon.net" target="_blank">Developed by Erveon</a></span>
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
        position: fixed;
        height: 100%;
        background-color: #1B2936;
        margin-left: 0;
        transition: 0.4s;

        .by {
            font-size: 1rem;
            position: absolute;
            bottom: 1rem;
            width: 100%;
            text-align: center;

            a {
                color: #687784;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    body.collapsed-sidebar #sidebar {
        margin-left: -25rem;
    }
</style>