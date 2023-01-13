import { AppRouteRecordRaw } from '../../types';

const dashboard: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('/@/layout/default/index.vue'),
  redirect: '/dashboard/workbench',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: 'workbench',
      name: 'workbench',
      meta: {
        title: '我的工作台',
      },
      component: () => import('/@/views/dashboard/workbench/index.vue'),
    },
  ],
};

export default dashboard;
