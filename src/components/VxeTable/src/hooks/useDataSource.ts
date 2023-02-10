import { cloneDeep } from 'lodash-es';
import { VxeDataProps } from '../types/index';
export function useDataSource(props: any, data: VxeDataProps) {
  // 监听props.vxedata
  watch(
    () => props.data,
    () => {
      data.vxeData.value = cloneDeep(props.data);
    },
    { immediate: true },
  );
}
