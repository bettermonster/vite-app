import { defineStore } from 'pinia';
import { LoginParams } from '/@/api/sys/model/userModel';
import { router } from '/@/router/index';

import { loginApi, userInfoApi } from '/@/api/sys/user';
import { TOKEN_KEY, USRINFO_KEY } from '/@/enums/cacheEnum';

import { setAuthCache, getAuthCache } from '/@/utils/auth';
import { userPermissionStore } from './permission';
import { RouteRecordRaw } from 'vue-router';
import { PageEnum } from '/@/enums/PageEnum';

interface userState {
  token: Nullable<UserToken>;
  userInfo: Nullable<object>;
  sessionTimeout: boolean;
}

export const useUserStore = defineStore('app-user', {
  state: (): userState => ({
    token: null, // 会话token信息
    userInfo: null,
    sessionTimeout: false, // 会话是否过期
  }),
  getters: {
    getToken(): UserToken {
      return this.token || getAuthCache(TOKEN_KEY);
    },
    getUserInfo(): object {
      return this.userInfo || getAuthCache(USRINFO_KEY);
    },
    getSessionTimeout(): boolean {
      return this.sessionTimeout;
    },
  },
  actions: {
    setToken(info: UserToken | null) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
    },
    setUserInfo(info: any) {
      this.userInfo = info;
      setAuthCache(USRINFO_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    async login(params: LoginParams) {
      // 访问登录接口
      try {
        const data = await loginApi(params);
        const { access_token, refresh_token, expires_in } = data;
        // 保存token
        if (access_token) {
          this.setToken({
            access_token,
            refresh_token,
            expires_in,
            buildTime: new Date().getTime() - Math.ceil(expires_in / 3) * 1000,
          });
          // 登录成功后 获取路由、跳转页面、获取UserInfo
          this.afterLoginAction();
        }
        // 拿到接口要判断先关的内容
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction() {
      // 获取前UserInfo
      const userInfo = await this.getUserInfoAction();
      console.log(userInfo);
      // 获取role权限
      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      } else {
        const permissionStore = userPermissionStore();
        if (!permissionStore.dynamicAddedRoute) {
          // 设置动态路由(权限直接后端做了，这里直接合并基础路由就行了)
          // 因为菜单权限相关问题所以直接提取出来放到permission
          const routes = await permissionStore.buildRoutesAction();
          console.log(routes);
          routes.forEach((route) => {
            router.addRoute(route as RouteRecordRaw);
          });
          permissionStore.setDynamicAddedRoute(true);
          // 跳转页面
          router.replace(PageEnum.BASE_HOME);
        }
      }
    },
    async getUserInfoAction() {
      // 获取token判断是否登录成功
      if (!this.getToken) return null;
      // 登录接口
      const userInfo = await userInfoApi();
      this.setUserInfo(userInfo);
      return userInfo;
    },
    logout() {
      this.setToken(null);
      this.setUserInfo(null);
      this.setSessionTimeout(false);
      router.push(PageEnum.BASE_LOGIN);
    },
    resetState() {
      this.userInfo = null;
      this.token = null;
      this.sessionTimeout = false;
    },
  },
});
