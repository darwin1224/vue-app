import Vue from 'vue';
import Router, { RouteConfig, RouterOptions, RouterMode } from 'vue-router';
import Login from '@/pages/Auth/Login.vue';
import Register from '@/pages/Auth/Register.vue';
import PostList from '@/pages/Post/PostList.vue';

Vue.use(Router);

/**
 * Router mode
 *
 * @type {RouterMode}
 */
const mode: RouterMode = 'history';

/**
 * Routes paths
 *
 * @type {RouteConfig[]}
 */
const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/',
    name: 'PostList',
    component: PostList
  }
];

/**
 * Router options
 *
 * @type {RouterOptions}
 */
const router: RouterOptions = {
  mode,
  base: process.env.BASE_URL,
  routes
};

export default new Router(router);
