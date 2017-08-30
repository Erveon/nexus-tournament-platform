import Vue from 'vue';
import Router from 'vue-router';

// Pages
import HomePage from '@/components/pages/HomePage';
import TournamentsPage from '@/components/pages/TournamentsPage';
import ActivatePage from '@/components/pages/ActivatePage';
import AboutPage from '@/components/pages/AboutPage';
import RankingsPage from '@/components/pages/RankingsPage';
import ShopPage from '@/components/pages/ShopPage';

import AnnouncementPost from '@/components/news/announcements/AnnouncementPost';

// Admin
import AdminPage from '@/components/pages/AdminPage';

// Announcement Admin
import NewsAdmin from '@/components/news/admin/List';
import NewsSettings from '@/components/news/admin/Settings';
import AdminDashboard from '@/components/admin/AdminDashboard';

// Tournament Admin
import TournamentAdmin from '@/components/tournaments/admin/List';
import TournamentSettings from '@/components/tournaments/admin/Settings';

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
        { path: '/rankings', name: 'Rankings', component: RankingsPage },
        { path: '/shop', name: 'Shop', component: ShopPage },
        { path: '/tournaments', name: 'Tournaments', component: TournamentsPage },
        { path: '/activate', name: 'Activate', component: ActivatePage },
        { path: '/announcement/:post', name: 'Announcement', component: AnnouncementPost },
        { path: '/admin', component: AdminPage,
            children: [
                { path: '', redirect: { name: 'Dashboard' } },
                { path: 'dashboard', name: 'Dashboard', component: AdminDashboard },
                { path: 'news', name: 'Announcement Admin', component: NewsAdmin },
                { path: 'news/create', name: 'Add Announcement', component: NewsSettings },
                { path: 'news/:id', name: 'Edit Announcement', component: NewsSettings },
                { path: 'tournaments', name: 'Tournament Admin', component: TournamentAdmin },
                { path: 'tournaments/create', name: 'Create Tournament', component: TournamentSettings },
                { path: 'tournaments/:id', name: 'Edit Tournament', component: TournamentSettings },
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
