import { defineStore } from 'pinia';
import type { Menu } from '/@/router/types';

interface PermissionState {
  backMenuList: Menu[];
}

export const userPermissionStore = defineStore('app-permission', {
  state: (): PermissionState => ({
    // 后台菜单列表
    backMenuList: [],
  }),
  actions() {},
});
