import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/pages/Home';
import Tournaments from '@/components/pages/Tournaments';
import Activate from '@/components/account/Activate';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
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
