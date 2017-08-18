<template>
    <div class="page-wrapper">
        <div class="page">
            <component-selector :tabs="tabs"></component-selector>
        </div>
    </div>
</template>

<script>
    import ProfileSettings from '@/components/user/settings/ProfileSettings';
    import SocialSettings from '@/components/user/settings/SocialSettings';

    export default {
        name: 'user-settings',
        data() {
            return {
                tabs: [
                    { title: "Profile", component: ProfileSettings },
                    { title: "Social", component: SocialSettings }
                ]
            };
        },
        beforeRouteEnter(to, from, next) {
            if(account.authenticated && account.level >= 6) {
                next();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page-wrapper {
        margin: 3rem auto 0 auto;
        padding: 0 3rem;

        .page {
            max-width: 1200px;
            margin: 3rem auto;
        }
    }
</style>
