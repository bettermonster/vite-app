import { AppRouteRecordRaw } from '../types';
import { cloneDeep } from 'lodash-es';
import { treeMap } from '/@/utils/helper/treeHelper';

export function transformRouteToMenu(routeList: AppRouteRecordRaw[]) {
  // 借助 lodash 深拷贝
  const cloneRouteList = cloneDeep(routeList);

  // 提取树指定结构
  const list = treeMap(cloneRouteList, {
    conversion: (node: AppRouteRecordRaw) => {
      const { meta: { title, hideMenu = false } = {} } = node;

      return {
        ...(node.meta || {}),
        meta: node.meta,
        name: title,
        hideMenu,
        path: node.path,
        ...(node.redirect ? { redirect: node.redirect } : {}),
      };
    },
  });
  // console.log(list)
  return cloneDeep(list);
}
