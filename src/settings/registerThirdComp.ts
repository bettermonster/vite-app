import { App } from 'vue';
import { registerVxeTable } from '/@/components/VxeTable'

export function registerThirdComp(app: App) {
  registerVxeTable(app);
}
