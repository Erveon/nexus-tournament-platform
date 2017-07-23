import './assets/css/normalize.css';
import './assets/css/skeleton.css';

import "@/components/modals/vodal/style/common.css";
import "@/components/modals/vodal/style/zoom.css";

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import Sidebar from '@/components/core/sidebar/Sidebar';
import Mainview from '@/components/core/mainview/Mainview';
import Card from '@/components/core/card/Card';
import Modals from '@/components/modals/Modals';

import Vodal from '@/components/modals/vodal';
import Ladda from 'vue-ladda'

// Libraries
Vue.component(Vodal.name, Vodal);
Vue.component('ladda', Ladda)

// Main components
Vue.component(Sidebar.name, Sidebar);
Vue.component(Mainview.name, Mainview);
Vue.component(Card.name, Card);
Vue.component(Modals.name, Modals);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
