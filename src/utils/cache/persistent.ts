import { createSessionStorage } from './index';
import { TOKEN_KEY, USRINFO_KEY } from '/@/enums/cacheEnum';

export interface BasicStore {
  [TOKEN_KEY]: UserToken;
  [USRINFO_KEY]: object;
}

export type BasicKeys = keyof BasicStore;

type SessionKeys = keyof BasicStore;

const ss = createSessionStorage();

export class Persistent {
  static setSession(key: SessionKeys, value: BasicStore[SessionKeys]) {
    ss.set(key, value);
  }

  static gettSession(key: SessionKeys) {
    return ss.get(key)?.value;
  }
}
