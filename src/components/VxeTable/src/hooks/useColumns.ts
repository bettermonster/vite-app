import { VxeTableProps, VxeDataProps, JVxeColumn } from '../types/index';
import { isArray, isEmpty } from '../../../../utils/is';
import { JVxeTypePrefix, JVxeTypes } from '../types/JVxeTypes';
import { cloneDeep } from 'lodash-es';
import { resolve } from 'path';

// handle 方法参数
export interface HandleArgs {
  props: VxeTableProps;
  data: VxeDataProps;
  col?: JVxeColumn;
  columns: JVxeColumn[];
  renderOptions?: any;
}

export function useColumns(props: VxeTableProps, data: VxeDataProps) {
  data.vxeColumns = computed(() => {
    const columns: JVxeColumn[] = [];
    if (isArray(props.columns)) {
      const args: HandleArgs = { props, data, columns };
      let seqColumn: any;
      props.columns.forEach((column: JVxeColumn) => {
        column['resizable'] = column['resizable'] || true;
        // type 不填，默认为 normal
        if (column.type == null || isEmpty(column.type)) {
          column.type = JVxeTypes.normal;
        }
        const col: JVxeColumn = cloneDeep(column);
        // 处理隐藏列
        if (col.type === JVxeTypes.hidden) {
          return handleInnerColumn(args, col, handleHiddenColumn);
        }
        args.col = col;
        args.renderOptions = {
          border: props.border,
        };

        if (col.type === JVxeTypes.rowNumber) {
          seqColumn = col;
          columns.push(col);
        } else {
          // 额外的参数
          col.params = column;
          handlerCol(args);
        }
      });
      handleInnerColumn(args, seqColumn, handleSeqColumn);
    }
    return columns;
  });
}

/** 处理内置列 */
function handleInnerColumn(args: HandleArgs, col: JVxeColumn, handler: (args: HandleArgs) => void, assign?: boolean) {
  const renderOptions = col?.editRender || col?.cellRender;
  return handler({
    ...args,
    col: col,
    renderOptions: assign ? Object.assign({}, args.renderOptions, renderOptions) : renderOptions,
  });
}

/**
 * @description: 处理隐藏列
 * @return {*}
 */
function handleHiddenColumn({ col, columns }: HandleArgs) {
  delete col!.type;
  col!.visible = false;
  columns.push(col!);
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

  if (col.cellRender) {
    Object.assign(col.cellRender, args.renderOptions);
  }

  columns.push(col);
}

/**
 * 处理行号列
 */
function handleSeqColumn({ props, col, columns }: HandleArgs) {
  // 判断是否开启了行号列
  if (props.rowNumber) {
    const column = {
      type: 'seq',
      title: '序号',
      width: 60,
      fixed: 'left',
      align: 'center',
    };
    if (col) {
      Object.assign(col, column);
    } else {
      columns.unshift(column as any);
    }
  }
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
      col.params.optionsPromise = new Promise(async (resolve) => {
        let dictCodeString = col.params.dictCode;
        if (dictCodeString) {
          dictCodeString = encodeURI(dictCodeString);
        }
        // 获取数据字典 方法

      });
    } catch (error) {
      console.group(`[JVxeTabel] 查询字典"${col.params.dictCode}" 时发生异常！ `);
      console.warn(error);
      console.groupEnd();
    }
  }
}
