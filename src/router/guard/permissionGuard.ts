import { RouteRecordRaw, Router } from 'vue-router';
import { useUserStore } from '/@/store/modules/user';
import { PageEnum } from '/@/enums/pageEnum';
// import { RootRoute } from '/@/router/routes/index';
import { userPermissionStore } from '/@/store/modules/permission';

const LOGIN_PATH = PageEnum.BASE_LOGIN;
// const ROOT_PATH = RootRoute.path;
const whitePathList: PageEnum[] = [LOGIN_PATH];

export function createPermissionGuard(router: Router) {
  const userStore = useUserStore();
  const premissionStore = userPermissionStore();
  router.beforeEach(async (to, from, next) => {
    const token = userStore.getToken;
    console.log(to);
    console.log(token);
    console.log(premissionStore.getDynamicAddedRoute);
    // isSessionTimeout,判断是否token过期
    // whiteList can be directly entered
    if (whitePathList.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        alert(1);
        const isSessionTimeout = userStore.getSessionTimeout;
        try {
          await userStore.afterLoginAction();
          if (!isSessionTimeout) {
            next((to.query?.redirect as string) || '/');
            return;
          }
        } catch (error) {
          console.log(error);
        }
      }
      next();
      return;
    }

    if (!token) {
      // redirect login page
      console.log(LOGIN_PATH);
      alert(2);
      const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
      }
      console.log('111111111111111');
      console.log(redirectData);
      next(redirectData);
      return;
    }

    if (premissionStore.getDynamicAddedRoute) {
      alert(2)
      next();
      return;
    }

    const routes = await premissionStore.buildRoutesAction();

    routes.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw);
    });

    premissionStore.setDynamicAddedRoute(true);

    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    next(nextData);
  });
}
