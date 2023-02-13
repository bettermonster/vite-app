import { VxeTableProps, VxeDataProps } from '../types/index';
import { isArray } from '../../../../utils/is';
export function useColumns(props: VxeTableProps, data: VxeDataProps) {
  data.vxeColumns = computed(() => {
    const columns: any[] = [];
    if (isArray(props.columns)) {
      props.columns.forEach((column: any) => {
        column['resizable'] = column['resizable'] || true;
        columns.push(column);
      });
    }
    return columns;
  });
}
