import { App } from 'vue';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[],
});

export const setupRouter = (app: App) => {
  return app.use(router);
};

router.beforeEach((to, from, next) => {
  console.log(router.getRoutes());
  next();
});
