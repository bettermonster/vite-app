import { VxeTableProps } from '../types/index';
export function useMethods(props: VxeTableProps, { emit }: any) {
  // 事件触发绑定
  function trigger(name: string, event: any = {}) {
    // console.log('trigger');
    // console.log(event);
    emit(name, event);
  }

  return {
    methods: {
      trigger,
    },
  };
}
