import { defineConfig } from 'vite';
import { createVitePlugins } from './build/vite/plugin';
import { resolve } from 'path';

import { generateModifyVars } from './build/generate/generateModifyVars';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: true,
    proxy: {
      '/yuapi': {
        target: 'http://119.45.103.189:15008',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/yuapi`), ''),
      },
    },
  },
  plugins: createVitePlugins(),
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },
});
