import type { RouteRecordRaw } from 'vue-router';

// 根路由
const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root',
  },
};

// 登录路由
const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('../../views/sys/login/Login.vue'),
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [RootRoute, LoginRoute];
