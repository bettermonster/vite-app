import { defineStore } from 'pinia';
import { RouteLocationNormalized } from 'vue-router';

export interface MultipleTabState {
  tabList: RouteLocationNormalized[];
  lastDragEndIndex: number;
}

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
      this.tabList.push(route);
    },
  },
});
