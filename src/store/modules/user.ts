import { defineStore } from 'pinia';
import { LoginParams } from '/@/api/sys/model/userModel';

import { loginApi } from '/@/api/sys/user';
import { TOKEN_KEY } from '/@/enums/cacheEnum';

import { setAuthCache } from '/@/utils/auth';

interface userState {
  token: Nullable<UserToken>;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export const useUserStore = defineStore('app-user', {
  state: (): userState => ({
    token: null, // 会话token信息
    accessToken: '', // 访问token
    refreshToken: '', // 刷新toekn
    expiresIn: '', // 过期时间
  }),
  actions: {
    setToken(info: UserToken | null) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
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
        }
        // 拿到接口要判断先关的内容
        return data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
});
