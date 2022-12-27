import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { basicRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
});

export const setupRouter = (app: App) => {
  return app.use(router);
};
