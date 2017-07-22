import './assets/css/normalize.css';
import './assets/css/skeleton.css';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import Sidebar from '@/components/core/sidebar/Sidebar';
import Mainview from '@/components/core/mainview/Mainview';
import Card from '@/components/core/card/Card';

Vue.component('sidebar', Sidebar);
Vue.component('main-view', Mainview);
Vue.component('card', Card);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
