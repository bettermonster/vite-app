// vite.config.ts
import { defineConfig } from "file:///D:/html/vben/vite-app/node_modules/.pnpm/vite@4.0.2_xep63cy7bzkpzmclaqri2qp7se/node_modules/vite/dist/node/index.js";

// build/vite/plugin.ts
import vue from "file:///D:/html/vben/vite-app/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.2+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/html/vben/vite-app/node_modules/.pnpm/unplugin-auto-import@0.12.1/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/html/vben/vite-app/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/html/vben/vite-app/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import vueJsx from "file:///D:/html/vben/vite-app/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.0.0_vite@4.0.2+vue@3.2.45/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
function createVitePlugins() {
  const vitePlugins = [vue(), vueJsx()];
  vitePlugins.push(
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    })
  );
  return vitePlugins;
}

// vite.config.ts
import { resolve } from "path";

// build/generate/generateModifyVars.ts
var generateModifyVars = () => {
  return {
    "success-color": "#55D187",
    namespace: "yu"
  };
};

// vite.config.ts
function pathResolve(dir) {
  return resolve(process.cwd(), ".", dir);
}
var vite_config_default = defineConfig({
  base: "/",
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://119.45.103.189:15008",
        changeOrigin: true,
        ws: true,
        rewrite: (path) => {
          console.log(path);
          console.log(path.replace(new RegExp(`^/api`), ""));
          return path.replace(new RegExp(`^/api`), "");
        }
      }
    }
  },
  plugins: createVitePlugins(),
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars()
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve("src") + "/"
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvdml0ZS9wbHVnaW4udHMiLCAiYnVpbGQvZ2VuZXJhdGUvZ2VuZXJhdGVNb2RpZnlWYXJzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcaHRtbFxcXFx2YmVuXFxcXHZpdGUtYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxodG1sXFxcXHZiZW5cXFxcdml0ZS1hcHBcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2h0bWwvdmJlbi92aXRlLWFwcC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tICcuL2J1aWxkL3ZpdGUvcGx1Z2luJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVNb2RpZnlWYXJzIH0gZnJvbSAnLi9idWlsZC9nZW5lcmF0ZS9nZW5lcmF0ZU1vZGlmeVZhcnMnO1xuXG5mdW5jdGlvbiBwYXRoUmVzb2x2ZShkaXI6IHN0cmluZykge1xuICByZXR1cm4gcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnLicsIGRpcik7XG59XG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICcvJyxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogdHJ1ZSxcbiAgICBwcm94eToge1xuICAgICAgJy9hcGknOiB7XG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMTkuNDUuMTAzLjE4OToxNTAwOCcsXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgd3M6IHRydWUsXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocGF0aClcbiAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXi9hcGlgKSwgJycpKVxuICAgICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cChgXi9hcGlgKSwgJycpXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IGNyZWF0ZVZpdGVQbHVnaW5zKCksXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIGxlc3M6IHtcbiAgICAgICAgbW9kaWZ5VmFyczogZ2VuZXJhdGVNb2RpZnlWYXJzKCksXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAge1xuICAgICAgICBmaW5kOiAvXFwvQFxcLy8sXG4gICAgICAgIHJlcGxhY2VtZW50OiBwYXRoUmVzb2x2ZSgnc3JjJykgKyAnLycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcaHRtbFxcXFx2YmVuXFxcXHZpdGUtYXBwXFxcXGJ1aWxkXFxcXHZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGh0bWxcXFxcdmJlblxcXFx2aXRlLWFwcFxcXFxidWlsZFxcXFx2aXRlXFxcXHBsdWdpbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovaHRtbC92YmVuL3ZpdGUtYXBwL2J1aWxkL3ZpdGUvcGx1Z2luLnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWaXRlUGx1Z2lucygpIHtcbiAgY29uc3Qgdml0ZVBsdWdpbnM6IFBsdWdpbk9wdGlvbltdID0gW3Z1ZSgpLCB2dWVKc3goKV07XG5cbiAgLy8gZWxlbWVudFVJXHU2MzA5XHU5NzAwXHU1QkZDXHU1MTY1XG4gIHZpdGVQbHVnaW5zLnB1c2goXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgKTtcbiAgcmV0dXJuIHZpdGVQbHVnaW5zO1xufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxodG1sXFxcXHZiZW5cXFxcdml0ZS1hcHBcXFxcYnVpbGRcXFxcZ2VuZXJhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGh0bWxcXFxcdmJlblxcXFx2aXRlLWFwcFxcXFxidWlsZFxcXFxnZW5lcmF0ZVxcXFxnZW5lcmF0ZU1vZGlmeVZhcnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2h0bWwvdmJlbi92aXRlLWFwcC9idWlsZC9nZW5lcmF0ZS9nZW5lcmF0ZU1vZGlmeVZhcnMudHNcIjtleHBvcnQgY29uc3QgZ2VuZXJhdGVNb2RpZnlWYXJzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgICdzdWNjZXNzLWNvbG9yJzogJyM1NUQxODcnLFxuICAgIG5hbWVzcGFjZTogJ3l1JyxcbiAgfTtcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlQLFNBQVMsb0JBQW9COzs7QUNDdFIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLE9BQU8sWUFBWTtBQUVaLFNBQVMsb0JBQW9CO0FBQ2xDLFFBQU0sY0FBOEIsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBR3BELGNBQVk7QUFBQSxJQUNWLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxFQUNIO0FBQ0EsU0FBTztBQUNUOzs7QURsQkEsU0FBUyxlQUFlOzs7QUVGdVMsSUFBTSxxQkFBcUIsTUFBTTtBQUM5VixTQUFPO0FBQUEsSUFDTCxpQkFBaUI7QUFBQSxJQUNqQixXQUFXO0FBQUEsRUFDYjtBQUNGOzs7QUZDQSxTQUFTLFlBQVksS0FBYTtBQUNoQyxTQUFPLFFBQVEsUUFBUSxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQ3hDO0FBSUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsSUFBSTtBQUFBLFFBQ0osU0FBUyxDQUFDLFNBQVM7QUFDakIsa0JBQVEsSUFBSSxJQUFJO0FBQ2hCLGtCQUFRLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2pELGlCQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxHQUFHLEVBQUU7QUFBQSxRQUM3QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxrQkFBa0I7QUFBQSxFQUMzQixLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixZQUFZLG1CQUFtQjtBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFlBQVksS0FBSyxJQUFJO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
