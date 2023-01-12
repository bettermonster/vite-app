import { AppRouteRecordRaw } from '../types';
import dashboard from './modules/dashboard';

export const asyncRoutes: AppRouteRecordRaw[] = [dashboard];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/dashboard',
  meta: {
    title: 'Root',
  },
};

// 登录路由
const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('../../views/sys/login/Login.vue'),
  meta: {
    title: '登录',
  },
};

export const basicRoutes = [RootRoute, LoginRoute];
