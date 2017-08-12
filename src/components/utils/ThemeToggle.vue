<template>
    <a @click.prevent="toggleTheme()"><i class="theme-toggle fa fa-lightbulb-o"></i></a>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "theme-toggle",
        data() {
            return {
                theme: window.localStorage.getItem('theme') || 'default',
            };
        },
        created() {
            this.setTheme(this.theme);
        },
        methods: {
            setTheme(theme) {
                this.theme = theme;
                if(theme === 'default') {
                    $('body').removeClass('dark-theme');
                } else if(theme === 'dark') {
                    $('body').addClass('dark-theme');
                }
                window.localStorage.setItem('theme', theme);
            },
            toggleTheme() {
                let newTheme = this.theme === 'default' ? 'dark' : 'default';
                this.setTheme(newTheme);
            },
        }
    }
</script>

<style lang="scss" scoped>
    a {
        cursor: pointer;
        font-size: 2.2rem;
        color: #444444;
    }

    .dark-theme a {
        color: white;
    }
</style>
