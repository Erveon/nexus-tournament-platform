<template>
    <div class="page-wrapper">
        <div class="page">
            <component-selector :tabs="tabs"></component-selector>
        </div>
    </div>
</template>

<script>
    import AccountSettings from '@/components/user/settings/AccountSettings';
    import SocialSettings from '@/components/user/settings/SocialSettings';
    import account from '@/services/account.service';

    export default {
        name: 'user-settings',
        data() {
            return {
                tabs: [
                    { title: "Account", component: AccountSettings },
                    { title: "Social", component: SocialSettings }
                ]
            };
        },
        beforeRouteEnter(to, from, next) {
            if(account.authenticated && account.username === to.params.username) {
                next();
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
