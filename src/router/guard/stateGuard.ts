import { Router } from 'vue-router';
import { PageEnum } from '/@/enums/PageEnum';
import { useUserStore } from '/@/store/modules/user';
import { userPermissionStore } from '../../store/modules/permission';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    if (to.path === PageEnum.BASE_LOGIN) {
      const userStore = useUserStore();
      const permissionStore = userPermissionStore();
      userStore.resetState();
      permissionStore.resetState();
    }
  });
}
