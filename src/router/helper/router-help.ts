import { AppRouteRecordRaw } from '../types';

// 返回的对象转 路由对象
export function transformObjToRoute(routerList: any[]) {
  console.log(routerList);

  const routes: AppRouteRecordRaw[] = [];
  const routes1: AppRouteRecordRaw[] = new Map();

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
      route.component = import.meta.glob('../../components/Layout');
    }
    routes.push(route);
  });

  const menuObj = new Map();

  routerList.forEach((item) => {
    menuObj.set(item.menuId, item);
  });

  //  转为 数组对象的形式 根据 pid
  for (let i = 0; i < routes.length; i++) {
    const { funcUrl, menuId, upMenuId } = routerList[i];

    if (menuObj.has(upMenuId)) {
      menuObj.get(upMenuId).children = routes[i]
    } else {

    }
  }
  console.log(routes);

  return routes;
}
