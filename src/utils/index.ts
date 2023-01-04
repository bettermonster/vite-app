import { App } from 'vue';
import { isObject } from '/@/utils/is';

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = '';
  for (const key in obj) {
    parameters += key + '=' + encodeURIComponent(obj[key]) + '&';
  }
  parameters = parameters.replace(/&$/, '');
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters;
}

// 深度合并
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

export const withInstall = <T>(component: T) => {
  //通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令
  //向 app.config.globalProperties 中添加一些全局实例属性或方法
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name, component as any);
  };

  return component;
};
