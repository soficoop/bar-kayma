import Vue from 'vue';
import Router from 'vue-router';
import SignIn from './views/SignIn.vue';
import AnticipatedPayments from './views/AnticipatedPayments.vue';
import CreateDP from './views/CreateDP.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'AnticipatedPayments',
      path: '/anticipated-payments',
      component: AnticipatedPayments
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/create-dp',
      name: 'create-dp',
      component: CreateDP
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
