import { AppRouteRecordRaw } from '../../types';

const dashboard: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('/@/views/dashboard/workbench/index.vue'),
  meta: {
    title: '首页',
  },
};

export default dashboard;
