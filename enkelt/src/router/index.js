import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Start from "../views/Start";
import Dokumentation from "../views/Dokumentation";
import Dokument from "../views/Dokument";
import Tidslinje from "../views/Tidslinje";
import Licens from "../views/Licens";
import FourOhFour from "../views/FourOhFour";
import PrivacyPolicy from "../views/PrivacyPolicy";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/start',
        name: 'Start',
        component: Start
    },
    {
        path: '/dokumentation',
        name: 'Dokumentation',
        component: Dokumentation
    },
    {
        path: '/dokument',
        name: 'Dokument',
        component: Dokument
    },
    {
        path: '/tidslinje',
        name: 'Tidslinje',
        component: Tidslinje
    },
    {
        path: '/licens',
        name: 'Licens & Kontakt',
        component: Licens
    },
    {
        path: '*',
        name: 'FourOhFour',
        component: FourOhFour
    },
    {
        path: '/sekretess',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
