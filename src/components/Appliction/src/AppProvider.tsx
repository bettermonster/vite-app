import { defineComponent, toRefs } from 'vue';

import projectServer from '/@/settings/project.server';
import { prefixCls } from '/@/settings/designSetting';
import './css/appProvider.css';
import { createAppProviderContext } from './useAppContext';

export default defineComponent({
  props: {
    prefixCls: { type: String, default: prefixCls },
  },
  setup(props, { slots }) {
    // 可以进行依赖注入等操作

    console.log(props);

    const { prefixCls } = toRefs(props);
    // inject variable into the global
    createAppProviderContext({
      prefixCls,
      projectServer,
    });

    return () => {
      return slots.default?.();
    };
  },
});
