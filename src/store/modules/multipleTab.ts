import { defineStore } from 'pinia';
import { RouteLocationNormalized, RouteLocationRaw, Router } from 'vue-router';

export interface MultipleTabState {
  tabList: RouteLocationNormalized[];
  lastDragEndIndex: number;
}

const getToTarget = (tabItem: RouteLocationNormalized) => {
  const { query, params, path } = tabItem;
  return {
    params: params || {},
    path,
    query: query || {},
  };
};

export const useMultipleTabStore = defineStore({
  id: 'app-multiple-tab',
  state: (): MultipleTabState => ({
    tabList: [],
    lastDragEndIndex: 0,
  }),
  getters: {
    getTabList(): RouteLocationNormalized[] {
      return this.tabList;
    },
  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      const { path, name, fullPath, params, query, meta } = route;
      let updateIndex = -1;
      // 判断是否route 已经存在
      const tabHasExits = this.tabList.some((tab, index) => {
        updateIndex = index;
        return (tab.fullPath || tab.path) === (fullPath || path);
      });
      if (tabHasExits) {
        const curTab = this.tabList[updateIndex];
        if (!curTab) {
          return;
        }
        curTab.params = params || curTab.params;
        curTab.query = query || curTab.query;
        curTab.fullPath = fullPath || curTab.fullPath;
        this.tabList.splice(updateIndex, 1, curTab);
      } else {
        // 获取动态路由的打开数量，并限制，比如详情只能开3个 dynamic
        const dynamicLevel = (meta?.dynamicLevel ?? -1) as number;
        if (dynamicLevel > 0) {
          const realPath = meta?.realPath ?? '';
          if (this.tabList.filter((e) => e.meta?.realPath ?? '' === realPath).length >= dynamicLevel) {
            // 关闭第一个
            const index = this.tabList.findIndex((item) => item.meta.realPath === realPath);
            index !== -1 && this.tabList.splice(index, 1);
          }
        }
        this.tabList.push(route);
      }
    },
    async closeTab(tab: RouteLocationNormalized, router: Router) {
      const close = (route: RouteLocationNormalized) => {
        const { path, meta: { affix } = {} } = route;
        // 判断是否是常驻 tab affix
        if (affix) {
          return;
        }
        const index = this.tabList.findIndex((item) => item.path === path);
        index !== -1 && this.tabList.splice(index, 1);
      };
      const { currentRoute, replace } = router;
      const { path } = unref(currentRoute);
      // 关闭非当前路由tab
      if (path !== tab.path) {
        close(tab);
        return;
      }
      // 关闭当前路由tab
      let toTarget: RouteLocationRaw = {};
      const index = this.tabList.findIndex((item) => item.fullPath === path);
      if (index === 0) {
        // 剩最后一个
      } else {
        const page = this.tabList[index - 1];
        toTarget = getToTarget(page);
      }
      close(currentRoute.value);
      await replace(toTarget);
    },
    // 关闭tab 并且收起菜单、
    async closeTabByKey(key: string, router: Router) {
      const index = this.tabList.findIndex((item) => (item.fullPath || item.path) === key);
      if (index !== -1) {
        await this.closeTab(this.tabList[index], router);
        
        // 检查当前路由是否存在于tabList中
        const isActivated = this.tabList.findIndex((item) => {
          return item.fullPath === currentRoute.value.fullPath;
        });
        console.log(this.tabList);
      }
    },
  },
});
