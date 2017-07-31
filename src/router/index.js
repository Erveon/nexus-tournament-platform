import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/pages/Hello';
import Tournaments from '@/components/pages/Tournaments';
import Activate from '@/components/account/Activate';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello,
        },
        {
            path: '/tournaments',
            name: 'Tournaments',
            component: Tournaments,
        },
        {
            path: '/activate',
            name: 'Activate',
            component: Activate,
        },
    ],
});
