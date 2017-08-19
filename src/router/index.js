import Vue from 'vue';
import Router from 'vue-router';

// Pages
import HomePage from '@/components/pages/HomePage';
import TournamentsPage from '@/components/pages/TournamentsPage';
import ActivatePage from '@/components/pages/ActivatePage';
import AboutPage from '@/components/pages/AboutPage';
import PlayersPage from '@/components/pages/PlayersPage';
import TeamsPage from '@/components/pages/TeamsPage';

import AnnouncementPost from '@/components/news/announcements/AnnouncementPost';

// Administration
import AdminPage from '@/components/pages/AdminPage';
import NewsAdmin from '@/components/news/admin/List';
import EditNews from '@/components/news/admin/Edit';
import AdminDashboard from '@/components/admin/AdminDashboard';

// User
import UserPage from '@/components/pages/UserPage';
import UserProfile from '@/components/user/UserProfile';
import UserTournaments from '@/components/user/UserTournaments';
import UserTeams from '@/components/user/UserTeams';
import UserSettings from '@/components/user/UserSettings';

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'Home' } },
        { path: '/home', name: 'Home', component: HomePage },
        { path: '/about', name: 'About', component: AboutPage },
        { path: '/players', name: 'Players', component: PlayersPage },
        { path: '/teams', name: 'Teams', component: TeamsPage },
        { path: '/tournaments', name: 'Tournaments', component: TournamentsPage },
        { path: '/activate', name: 'Activate', component: ActivatePage },
        { path: '/announcement/:post', name: 'Announcement', component: AnnouncementPost },
        { path: '/admin', component: AdminPage,
            children: [
                { path: '', redirect: { name: 'Dashboard' } },
                { path: 'dashboard', name: 'Dashboard', component: AdminDashboard },
                { path: 'news', name: 'News Admin', component: NewsAdmin },
                { path: 'news/create', name: 'Add News', component: EditNews },
                { path: 'news/:id', name: 'Edit News', component: EditNews }
            ]
        },
        { path: '/user/:username', component: UserPage, props: true,
            children: [
                { path: '', redirect: { name: 'User Profile' } },
                { path: 'profile', name: 'User Profile', component: UserProfile },
                { path: 'tournaments', name: 'User Tournaments', component: UserTournaments },
                { path: 'teams', name: 'User Teams', component: UserTeams },
                { path: 'settings', name: 'User Settings', component: UserSettings }
            ]
        },
    ],
});
