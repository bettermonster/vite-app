import { merge } from 'lodash-es';
import { VxeTableProps, VxeDataProps } from '../types/index';
export function useFinallyProps(props: VxeTableProps, data: VxeDataProps) {
  const vxeProps: any = computed(() => {
    return merge({}, data.defaultVxeProps, {
      columns: unref(data.vxeColumns),
      border: props.border,
      align: props.align,
    });
  });
  return {
    vxeProps,
    prefixCls: data.prefixCls,
  };
}
