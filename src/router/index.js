import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/pages/HomePage';
import TournamentsPage from '@/components/pages/TournamentsPage';
import Activate from '@/components/account/Activate';

import AnnouncementPost from '@/components/news/announcements/AnnouncementPost';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/tournaments',
            name: 'Tournaments',
            component: TournamentsPage,
        },
        {
            path: '/activate',
            name: 'Activate',
            component: Activate,
        },
        {
            path: '/announcement/:post',
            name: 'Announcement',
            component: AnnouncementPost
        }
    ],
});
