<template>
    <card class="activation">
        {{ message }}
    </card>
</template>

<script>
import axios from 'axios';

export default {
    name: "Activate",
    data() {
        return {
            message: 'Activating your account..'
        }
    },
    created() {
        let key = this.$route.query.key;
        if(!key) {
            this.message = "Please click the link in your activation email to activate your account";
        } else {
            axios.post('/api/auth/activate', { key: key })
            .then(response => {
                this.message = "Your account has been activated, you can now log in. Welcome to Nexus!";
            }).catch(err => {
                this.message = "Your activation key is incorrect. Has your account been activated already?";
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .activation {
        text-align: center;
    }
</style>
