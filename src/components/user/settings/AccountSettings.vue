<template>
    <div>
        <card>
            <a @click.prevent="logout">Log out</a>
        </card>
    </div>
</template>

<script>
    export default {
        name: 'account-settings',
        methods: {
            logout() {
                localStorage.removeItem('acc_token');
                this.$router.push('/home');
                this.$router.go();
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        cursor: pointer;
    }
</style>
