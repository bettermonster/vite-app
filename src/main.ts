// 引入样式
import './design/tailwind.css';
import '/@/design/index.less';

import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from '/@/store';
import { router, setupRouter } from '/@/router';
import { setRouterGuard } from '/@/router/guard/index';
import { registerThirdComp } from './settings/registerThirdComp';

function bootstrap() {
  const app = createApp(App);

  // 配置store
  setupStore(app);
  // 初始化系统配置
  // 注册全局组件
  // 多语言配置
  // 配置路由
  setupRouter(app);
  // 路由守卫
  setRouterGuard(router);
  // 注册全局指令
  // 配置全局错误处理

  // 注册第三方组件
  registerThirdComp(app);

  app.mount('#app');
}

bootstrap();
