<template>
    <div id="sidebar">
        <router-link to="/" class="brand"><span>Nexus Gaming</span></router-link>
        <navigation></navigation>
        <span class="by"><a href="https://erveon.net" target="_blank">Developed by Erveon</a></span>
    </div>
</template>

<script>
    import Navigation from '@/components/core/navigation/Navigation';

    export default {
        name: "sidebar",
        components: {
            'navigation': Navigation
        },
        data() {
            return { };
        }
    };
</script>

<style lang="scss" scoped>
    #sidebar {
        z-index: 9998;
        width: 25rem;
        position: fixed;
        height: 100%;
        background-color: #1B2936;
        margin-left: 0;
        transition: 0.4s;

        .brand {
            display: block;
            height: 5rem;
            background-color: #156DAD;
            color: white;
            text-align: center;
            line-height: 5rem;
            font-size: 1.8rem;
            font-family: 'Muli';
            transition: 0.2s;

            &:hover {
                background-color: #237dbc;
            }

            span {
                display: inline-block;
                height: 5rem;
                background-size: 2.5rem;
                background-image: url('../../../assets/logow.png');
                background-repeat: no-repeat;
                background-position: left center;
                padding-left: 3.5rem;
            }
        }

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