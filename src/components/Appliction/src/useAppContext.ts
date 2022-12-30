import { Ref } from 'vue';
import type { InjectionKey } from 'vue';
import { createContext, useContext } from '/@/hooks/core/useContext';

interface AppProviderContextProps {
  prefixCls: Ref<string>;
  projectServer: object;
}

const key: InjectionKey<AppProviderContextProps> = Symbol();

export function createAppProviderContext(context: AppProviderContextProps) {
  // provide 注册需要key / value 值
  createContext<AppProviderContextProps>(context, key);
}

// 获取AppProvide的变量
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}
