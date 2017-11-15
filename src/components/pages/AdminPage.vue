<template>
    <div class="page-wrapper">
        <div class="page">
            <div id="admin" class="row">
                <card class="sub-nav" :padding="0">
                    <ul>
                        <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
                        <li><router-link to="/admin/news">Announcements</router-link></li>
                        <li><router-link to="/admin/tournaments">Tournaments</router-link></li>
                    </ul>
                </card>
                <router-view></router-view>
            </div>
        </div>
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
</style>
