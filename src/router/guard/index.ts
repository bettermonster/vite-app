import { Router } from 'vue-router';
import { createPermissionGuard } from './permissionGuard';
import { createStateGuard } from './stateGuard';

export function setRouterGuard(router: Router) {
  createPermissionGuard(router);
  createStateGuard(router);
}
