import { merge } from 'lodash-es';
import { VxeTableProps, VxeDataProps } from '../types/index';
export function useFinallyProps(props: VxeTableProps, data: VxeDataProps) {
  const vxeProps: any = computed(() => {
    return merge({}, data.defaultVxeProps, {
      ref:'gridRef',
      loading: false,
      columns: unref(data.vxeColumns),
      border: props.border,
      height: props.height === 'auto' ? null : props.height,
      maxHeight: props.maxHeight,
      align: props.align,
    });
  });
  return {
    vxeProps,
    prefixCls: data.prefixCls,
  };
}
