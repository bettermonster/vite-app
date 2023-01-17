import { defineStore } from 'pinia';
import type { Menu, AppRouteRecordRaw } from '/@/router/types';
import { userMenuApi } from '/@/api/sys/user';
import { transformObjToRoute } from '/@/router/helper/router-help';
import { asyncRoutes, basicRoutes } from '/@/router/routes/index';

interface PermissionState {
  backMenuList: Menu[];
  dynamicAddedRoute: boolean;
}

export const userPermissionStore = defineStore('app-permission', {
  state: (): PermissionState => ({
    // 后台菜单列表
    backMenuList: [],
    dynamicAddedRoute: false,
  }),
  getters: {
    getDynamicAddedRoute(): boolean {
      return this.dynamicAddedRoute;
    },
  },
  actions: {
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
    },
    setDynamicAddedRoute(flag: boolean) {
      this.dynamicAddedRoute = flag;
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

      routes = [...basicRoutes, ...routerList, ...asyncRoutes];
      console.log(routes);
      return routes;
    },
    resetState() {
      this.backMenuList = [];
      this.dynamicAddedRoute = false;
    },
  },
});
