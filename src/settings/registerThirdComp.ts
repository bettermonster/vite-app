import { registerVxeTable } from '/@/components/VxeTable';
import { App } from 'vue';

export function registerThirdComp(app: App) {
  registerVxeTable(app);
}
