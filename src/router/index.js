import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@/components/Hello';
import Tournaments from '@/components/Tournaments';

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
    ],
});
