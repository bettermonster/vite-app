import { defineStore } from 'pinia';
import type { Menu, AppRouteRecordRaw } from '/@/router/types';
import { userMenuApi } from '/@/api/sys/user';
import { transformObjToRoute } from '/@/router/helper/router-help';

interface PermissionState {
  backMenuList: Menu[];
}

export const userPermissionStore = defineStore('app-permission', {
  state: (): PermissionState => ({
    // 后台菜单列表
    backMenuList: [],
  }),
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
    },
    // 构建路由 同时 转换菜单拿到 backMenuList
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      let routes: AppRouteRecordRaw[] = [];

      let routerList: AppRouteRecordRaw[] = [];
      let menuList = [];
      try {
        menuList = await userMenuApi();
      } catch (error) {
        console.error(error);
      }
      routerList = transformObjToRoute(menuList.menu);

      // 路由转菜单结构
      const backMenuList = transformRouteToMenu(routerList);
      this.setBackMenuList(backMenuList);

      routes = [...routerList];
      return routes;
    },
  },
});
