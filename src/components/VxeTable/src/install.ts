import { App } from 'vue';
import 'xe-utils';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import VXETablePluginElement from 'vxe-table-plugin-element';
import 'vxe-table-plugin-element/dist/style.css';
// import VxeTable from './VxeTable';

import { registerAllComponent } from './utils/registerUtils';

export function registerVxeTable(app: App) {
  // VXETable 全局配置
  const VXETableSettings = {
    // z-index 起始值
    zIndex: 1000,
    table: {},
  };
  // 执行注册方法
  VXETable.setup(VXETableSettings);

  // 注册插件
  VXETable.use(VXETablePluginElement);
  
  // 注册自定义渲染组件
  registerAllComponent();

  app.use(VXETable);
  // app.component('MVxeTable', VxeTable);
}
