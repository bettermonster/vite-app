import { App } from 'vue';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import VxeTable from './VxeTable';

export function registerVxeTable(app: App) {
  // VXETable 全局配置
  const VXETableSettings = {
    // z-index 起始值
    zIndex: 1000,
    table: {},
  };
  // 执行注册方法
  VXETable.setup(VXETableSettings);
  app.use(VXETable);
  app.component('VxeTable', VxeTable);
}
