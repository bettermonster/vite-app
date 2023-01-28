import { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';
import { setRouteChange } from '/@/logics/mitt/routeChange';
import { createStateGuard } from './stateGuard';

export function setRouterGuard(router: Router) {
  createPageGuard(router);
  createPermissionGuard(router);
  createStateGuard(router);
}

function createPageGuard(router: Router) {
  router.beforeEach((to) => {
    // notify routing changes
    setRouteChange(to);
    return true;
  });
}
