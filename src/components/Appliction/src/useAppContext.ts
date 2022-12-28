import { Ref } from 'vue';
import { createContext } from '/@/hooks/core/useContext';

interface AppProviderContextProps {
  prefixCls: Ref<string>;
  projectServer: object;
}

const key = Symbol()

export function createAppProviderContext(context: AppProviderContextProps) {
  // provide 注册需要key / value 值
  return createContext(context);
}
