<template>
    <div class="sidebar-toggle">
        <div @click.prevent="toggleMenu()" id="overlay"></div>
        <a @click.prevent="toggleMenu()" class="fa fa-bars" aria-hidden="true"></a>
    </div>
</template>

<script>
    import $ from 'jquery';
    import { EventBus } from '@/eventbus';

    export default {
        name: 'sidebar-toggle',
        methods: {
            isOpen() {
                let open = window.localStorage.getItem('sidebar');
                if(open === null) 
                    return window.innerWidth > 800;
                else return JSON.parse(open);
            },
            toggleMenu() {
                let newState = !this.isOpen();
                $("body").toggleClass('collapsed-sidebar');
                window.localStorage.setItem('sidebar', JSON.stringify(newState));
            },
        },
        mounted() {
            if(!this.isOpen()) {
                $('body').addClass('collapsed-sidebar');
            }
            /*this.$router.afterEach(() => {
                if(window.innerWidth <= 800)
                    this.toggleMenu();
            });*/
        }
    }
</script>

<style lang="scss" scoped>
    .sidebar-toggle {
        display: inline-block;

        a {
            cursor: pointer;
            color: black;
            font-size: 2rem;
            padding: 0 .5rem;
            margin-right: .5rem;
        }
    }

    .dark-theme .sidebar-toggle a {
        color: white;
    }
</style>
