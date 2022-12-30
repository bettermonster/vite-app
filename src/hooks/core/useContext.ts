import { InjectionKey, inject, provide } from 'vue';

export function createContext<T>(context: any, key: InjectionKey<T>) {
  provide(key, context);
}

export function useContext<T>(key: InjectionKey<T>) {
  return inject(key);
}
