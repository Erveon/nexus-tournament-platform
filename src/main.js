import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/flatpickr';
import 'flatpickr/dist/flatpickr.css';

import "@/components/modals/vodal/style/common.css";
import "@/components/modals/vodal/style/zoom.css";

import Vue from 'vue';
import App from './App';
import router from './router';

import Account from '@/services/account.service';
import Tester from '@/services/tester.service';

Vue.config.productionTip = true;

import Sidebar from '@/components/core/sidebar/Sidebar';
import Rightbar from '@/components/core/rightbar/Rightbar';
import Mainview from '@/components/core/mainview/Mainview';
import Card from '@/components/core/card/Card';
import ComponentSelector from '@/components/utils/ComponentSelector';
import Modals from '@/components/modals/Modals';

import Vodal from '@/components/modals/vodal';
import Ladda from 'vue-ladda'
import VeeValidate from 'vee-validate';
import flatPickr from 'vue-flatpickr-component';

// Libraries
Vue.use(VeeValidate);
Vue.component(Vodal.name, Vodal);
Vue.component('ladda', Ladda);
Vue.component('flatpickr', flatPickr);

// Main components
Vue.component(Sidebar.name, Sidebar);
Vue.component(Rightbar.name, Rightbar);
Vue.component(Mainview.name, Mainview);
Vue.component(Card.name, Card);
Vue.component(ComponentSelector.name, ComponentSelector);
Vue.component(Modals.name, Modals);


Promise.all([
    Tester.init(),
    Account.init()
]).then(() => {
    new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App },
    });
});