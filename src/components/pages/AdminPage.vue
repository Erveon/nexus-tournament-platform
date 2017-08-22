<template>
    <div id="admin" class="row">
        <card id="admin-nav" :padding="0">
            <ul>
                <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
                <li><router-link to="/admin/news">Announcements</router-link></li>
            </ul>
        </card>
        <router-view></router-view>
    </div>
</template>

<script>
    import account from '@/services/account.service';

    export default {
        name: "admin",
        beforeRouteEnter(to, from, next) {
            if(account.authenticated && account.level >= 6) {
                next();
            }
        },
    }
</script>

<style lang="scss" scoped>

    #admin {
        padding: 3rem 5rem;
    }

    .dark-theme {
        a {
            color: white !important;
            border-right: 1px solid #272e3d !important;

            &.active {
                background-color: #272E3D !important;
            }
        }
    }

    #admin-nav {
        ul {
            font-size: 0;
            padding: 0;
            margin: 0;
            list-style-type: none;
            height: 5rem;
            line-height: 5rem;
            
            li {
                font-size: 1.4rem;
                display: inline-block;
                margin: 0;

                a {
                    border-right: 1px solid lightgrey;
                    padding: 0 2rem;
                    display: block;
                    height: 100%;
                    text-decoration: none;
                    color: #1c1c1c;

                    &.active {
                        background-color: #f7f7f7;
                    }
                }
            }
        }

        .content {
            height: 50rem;
        }
    }
</style>
