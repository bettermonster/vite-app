import { cloneDeep } from 'lodash-es';
import { VxeDataProps, JVxeRefs } from '../types/index';
export function useDataSource(props: any, data: VxeDataProps, refs: JVxeRefs) {
  // 监听props.vxedata
  watch(
    () => props.data,
    async () => {
      data.vxeData.value = cloneDeep(props.data);
      await waitRef(refs.gridRef);
    },
    { immediate: true },
  );
}

function waitRef($ref: any) {
  return new Promise<any>((resolve) => {
    (function next() {
      if ($ref.value) {
        resolve($ref);
      } else {
        nextTick(() => next());
      }
    })();
  });
}
