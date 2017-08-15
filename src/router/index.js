import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/pages/HomePage';
import TournamentsPage from '@/components/pages/TournamentsPage';
import Activate from '@/components/account/Activate';

import AnnouncementPost from '@/components/news/announcements/AnnouncementPost';

// Administration
import AdminPage from '@/components/pages/AdminPage';
import NewsAdmin from '@/components/news/admin/List';
import EditNews from '@/components/news/admin/Edit';
import AdminDashboard from '@/components/admin/AdminDashboard';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'Home' } },
        { path: '/home', name: 'Home', component: HomePage },
        { path: '/tournaments', name: 'Tournaments', component: TournamentsPage },
        { path: '/activate', name: 'Activate', component: Activate },
        { path: '/announcement/:post', name: 'Announcement', component: AnnouncementPost },
        { path: '/admin', component: AdminPage,
            children: [
                { path: '', redirect: { name: 'Dashboard' } },
                { path: 'dashboard', name: 'Dashboard', component: AdminDashboard },
                { path: 'news', name: 'News Admin', component: NewsAdmin },
                { path: 'news/create', name: 'Add News', component: EditNews },
                { path: 'news/:id', name: 'Edit News', component: EditNews }
            ]
        }
    ],
});
