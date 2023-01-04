import { defineStore } from 'pinia';
import { LoginParams } from '/@/api/sys/model/userModel';

import { loginApi } from '/@/api/sys/user';

interface userState {
  token: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export const useUserStore = defineStore('app-user', {
  state: (): userState => ({
    token: '', // 会话token信息
    accessToken: '', // 访问token
    refreshToken: '', // 刷新toekn
    expiresIn: '', // 过期时间
  }),
  actions: {
    login(params: LoginParams) {
      // 访问登录接口
      loginApi(params);
      return 'userInfo';
    },
  },
});
