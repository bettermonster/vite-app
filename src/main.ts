// 引入样式
import './design/tailwind.css';
import '/@/design/index.less';

import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '/@/router';

function bootstrap() {
  const app = createApp(App);

  // 配置store
  // 初始化系统配置
  // 注册全局组件
  // 多语言配置
  // 配置路由
  setupRouter(app);
  // 路由守卫
  // 注册全局指令
  // 配置全局错误处理

  app.mount('#app');
}

bootstrap();
