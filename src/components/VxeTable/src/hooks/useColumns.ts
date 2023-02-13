import { VxeTableProps, VxeDataProps, JVxeColumn } from '../types/index';
import { isArray, isEmpty } from '../../../../utils/is';
import { JVxeTypes } from '../types/JVxeTypes';
export function useColumns(props: VxeTableProps, data: VxeDataProps) {
  data.vxeColumns = computed(() => {
    const columns: JVxeColumn[] = [];
    if (isArray(props.columns)) {
      props.columns.forEach((column: JVxeColumn) => {
        column['resizable'] = column['resizable'] || true;
        // type 不填，默认为 normal
        if (column.type == null || isEmpty(column.type)) {
          column.type = JVxeTypes.normal;
        }
        columns.push(column);
      });
    }
    return columns;
  });
}
