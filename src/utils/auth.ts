import { BasicKeys, Persistent } from '/@/utils/cache/persistent';

export function setAuthCache(key: BasicKeys, value: any) {
  // session保存信息
  const fn = Persistent.setSession;
  return fn(key, value);
}
