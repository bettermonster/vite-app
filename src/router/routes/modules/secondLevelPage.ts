import { AppRouteRecordRaw } from '../../types';

const pawnManageDetail: AppRouteRecordRaw = {
  path: '/secondeLevelPage',
  name: 'secondeLevelPage',
  component: () => import('/@/layout/default/index.vue'),
  meta: {
    title: '二级页面',
  },
  children: [
    {
      name: 'pawnManageDetail',
      path: '/secondeLevelPage/pawnMang/pawnManage/pawnManage/detail/:id',
      component: () => import('/@/views/pages/pawnMang/pawnManage/pawnManageDetail.vue'),
      meta: {
        title: '当物详情',
        hideMenu: true,
        dynamicLevel: 3,
        realPath: '/secondeLevelPage/pawnMang/pawnManage/pawnManage/detail',
      },
    },
  ],
};

export default { pawnManageDetail };
