import { BasicKeys, Persistent } from '/@/utils/cache/persistent';
import { TOKEN_KEY } from '../enums/cacheEnum';

export function setAuthCache(key: BasicKeys, value: any) {
  // session保存信息
  const fn = Persistent.setSession;
  return fn(key, value);
}

export function getAuthCache(key: BasicKeys) {
  const fn = Persistent.gettSession;
  return fn(key);
}

export function getToken(): UserToken {
  const fn = Persistent.gettSession;
  return fn(TOKEN_KEY);
}
