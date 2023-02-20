import { VxeTableProps, VxeDataProps, JVxeColumn } from '../types/index';
import { isArray, isEmpty } from '../../../../utils/is';
import { JVxeTypePrefix, JVxeTypes } from '../types/JVxeTypes';
import { cloneDeep } from 'lodash-es';

// handle 方法参数
export interface HandleArgs {
  props: VxeTableProps;
  data: VxeDataProps;
  col?: JVxeColumn;
  columns: JVxeColumn[];
  renderOption?: any;
}

export function useColumns(props: VxeTableProps, data: VxeDataProps) {
  data.vxeColumns = computed(() => {
    const columns: JVxeColumn[] = [];
    if (isArray(props.columns)) {
      const args: HandleArgs = { props, data, columns };
      props.columns.forEach((column: JVxeColumn) => {
        column['resizable'] = column['resizable'] || true;
        // type 不填，默认为 normal
        if (column.type == null || isEmpty(column.type)) {
          column.type = JVxeTypes.normal;
        }
        const col: JVxeColumn = cloneDeep(column);
        args.col = col;

        // 额外的参数
        col.params = column;
        handlerCol(args);
      });
    }
    return columns;
  });
}

/**
 * 处理自定义组件列
 */
function handlerCol(args: HandleArgs) {
  const { columns, col } = args;
  if (!col) return;
  const { type } = col;
  delete col.type;
  const renderName = 'cellRender';

  // 渲染选项
  const $renderOptions: any = { name: JVxeTypePrefix + type };
  col[renderName] = $renderOptions;

  handlerDict(args);

  columns.push(col);
}

/**
 * @description: 处理字典
 * @return {*}
 */
function handlerDict({ col }: HandleArgs) {
  if (col && col.params.dictCode) {
    /** 加载数据字典并合并到 options */
    try {
      // 查询字典
      
    } catch (error) {
      console.group(`[JVxeTabel] 查询字典"${col.params.dictCode}" 时发生异常！ `);
      console.warn(error);
      console.groupEnd();
    }
  }
}
