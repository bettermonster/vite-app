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
      '/api': {
        target: 'http://119.45.103.189:15008',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => {
          console.log(path)
          console.log(path.replace(new RegExp(`^/api`), ''))
          return path.replace(new RegExp(`^/api`), '')
        },
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
