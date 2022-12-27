import { App } from 'vue';

export const withInstall = <T>(component: T) => {
  //通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令
  //向 app.config.globalProperties 中添加一些全局实例属性或方法
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name, component as any);
  };

  return component;
};
