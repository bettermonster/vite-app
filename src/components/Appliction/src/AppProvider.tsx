import { defineComponent } from 'vue';
import './css/appProvider.css';

export default defineComponent({
  setup(props, { slots }) {
    // 可以进行依赖注入等操作

    return () => {
      return slots.default?.();
    };
  },
});
