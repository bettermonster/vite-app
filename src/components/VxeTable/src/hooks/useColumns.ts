import { VxeTableProps, VxeDataProps } from '../types/index';
import { isArray } from '../../../../utils/is';
export function useColumns(props: VxeTableProps, data: VxeDataProps) {
  data.vxeColumns = computed(() => {
    const columns: any[] = [];
    if (isArray(props.columns)) {
      props.columns.forEach((column: any) => {
        columns.push(column);
      });
    }
    return columns;
  });
}
