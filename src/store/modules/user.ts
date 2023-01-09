import { defineStore } from 'pinia';
import { LoginParams } from '/@/api/sys/model/userModel';

import { loginApi, userInfoApi, userMenuApi } from '/@/api/sys/user';
import { TOKEN_KEY, USRINFO_KEY } from '/@/enums/cacheEnum';

import { setAuthCache, getAuthCache } from '/@/utils/auth';

interface userState {
  token: Nullable<UserToken>;
  userInfo: object;
}

export const useUserStore = defineStore('app-user', {
  state: (): userState => ({
    token: null, // 会话token信息
    userInfo: {},
  }),
  getters: {
    getToken(): UserToken {
      return this.token || getAuthCache(TOKEN_KEY) || {};
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

      // 设置动态路由(权限直接后端做了，这里直接合并基础路由就行了)
      const menuResponse = await this.getMenuAndConrtAction();
      console.log(menuResponse);

      // 跳转页面
    },
    async getMenuAndConrtAction() {
      const menuData = await userMenuApi();
      return menuData;
    },
    async getUserInfoAction() {
      // 获取token判断是否登录成功
      if (!this.getToken) return null;
      // 登录接口
      const userInfo = await userInfoApi();
      this.setUserInfo(userInfo);
      return userInfo;
    },
  },
});
