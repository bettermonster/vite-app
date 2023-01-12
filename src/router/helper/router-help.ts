import { AppRouteRecordRaw } from '../types';

// 返回的对象转 路由对象
export function transformObjToRoute(routerList: any[]) {
  console.log(routerList);

  // 最终返回的数据
  const routes: AppRouteRecordRaw[] = [];
  // 转为Map 方便操作
  const routesMap = new Map<string, AppRouteRecordRaw>();

  //   先把全部的路由转化节点
  routerList.forEach((item) => {
    const route: AppRouteRecordRaw = {
      name: item.menuName,
      path: item.funcUrl || '',
      component: item.funcUrl || '',
      children: [],
      meta: {
        icon: item.menuIcon,
      },
    };
    // 是子节点
    if (item.funcUrl) {
      route.component = import.meta.glob('../../views/sys/login/Login.vue');
    } else {
      route.component = import.meta.glob('../../components/Layout/index.vue');
    }
    routesMap.set(item.menuId, route);
  });
  //  转为 数组对象的形式 根据 upMenuId menuId
  for (let i = 0; i < routerList.length; i++) {
    const { menuId, upMenuId } = routerList[i];
    const nowRoute = routesMap.get(menuId) as AppRouteRecordRaw;
    const pidRoute = routesMap.get(upMenuId) as AppRouteRecordRaw;

    if (routesMap.has(upMenuId) && pidRoute) {
      pidRoute.children?.push(nowRoute)
    } else {
      routes.push(nowRoute)
    }
  }
  return routes;
}
