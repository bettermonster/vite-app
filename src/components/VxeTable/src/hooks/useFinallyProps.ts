import { merge } from 'lodash-es';
import { VxeTableProps, VxeDataProps, JVxeRefs } from '../types/index';

export function useFinallyProps(props: VxeTableProps, data: VxeDataProps, refs: JVxeRefs, methods: any) {
  const vxeProps: any = computed(() => {
    return merge({}, data.defaultVxeProps, {
      ref: refs.gridRef,
      loading: false,
      columns: unref(data.vxeColumns),
      border: props.border,
      height: props.height === 'auto' ? null : props.height,
      maxHeight: props.maxHeight,
      align: props.align,
      editConfig: { trigger: 'dblclick', mode: 'row', beforeEditMethod: methods.beforeEditMethod },
    });
  });
  return {
    vxeProps,
    prefixCls: data.prefixCls,
  };
}
