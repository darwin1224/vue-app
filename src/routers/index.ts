import Vue from 'vue';
import Router, { RouteConfig, RouterOptions, RouterMode, Route } from 'vue-router';
import Login from '@/pages/Auth/Login.vue';
import Register from '@/pages/Auth/Register.vue';
import PostList from '@/pages/Post/PostList.vue';
import PostForm from '@/pages/Post/PostForm.vue';
import { NextRouter } from '@/types/routers';

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
    path: '/',
    redirect: '/post'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hasToken: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/post',
    name: 'PostList',
    component: PostList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post/create',
    name: 'PostCreate',
    component: PostForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post/edit/:id',
    name: 'PostEdit',
    component: PostForm,
    meta: {
      requiresAuth: true
    }
  }
];

/**
 * Router options
 *
 * @type {RouterOptions}
 */
const routerOptions: RouterOptions = {
  mode,
  base: process.env.BASE_URL,
  routes
};

/**
 * Router instance
 *
 * @type {Router}
 */
const router: Router = new Router(routerOptions);

/**
 * Global navigation guard
 */
router.beforeEach((to: Route, from: Route, next: NextRouter): any => {
  /**
   * If has meta requiresAuth and API_TOKEN key in localStorage is null,
   * will be redirected to /login
   */
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('API_TOKEN') === null) {
      next({ name: 'Login' });
    }
    next();
  }

  /**
   * If has meta hasToken and API_TOKEY key in localStorage is not null,
   * will be redirected to /post
   */
  if (to.matched.some(record => record.meta.hasToken)) {
    if (localStorage.getItem('API_TOKEN') !== null) {
      next({ name: 'PostList' });
    }
  }
  next();
});

export default router;
