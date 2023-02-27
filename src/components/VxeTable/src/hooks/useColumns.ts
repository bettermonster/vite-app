import { VxeTableProps, VxeDataProps, JVxeColumn } from '../types/index';
import { isArray, isEmpty } from '../../../../utils/is';
import { JVxeTypePrefix, JVxeTypes } from '../types/JVxeTypes';
import { cloneDeep } from 'lodash-es';
import { initDictOptions } from '/@/utils/dict';

// handle 方法参数
export interface HandleArgs {
  props: VxeTableProps;
  data: VxeDataProps;
  col?: JVxeColumn;
  columns: JVxeColumn[];
  renderOptions?: any;
  methods: any;
}

export function useColumns(props: VxeTableProps, data: VxeDataProps, methods: any) {
  data.vxeColumns = computed(() => {
    const columns: JVxeColumn[] = [];
    if (isArray(props.columns)) {
      const args: HandleArgs = { props, data, columns, methods };
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
          disabled: props.disabled ? column.disabled : column.disabled || false,
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

  let renderName = 'cellRender';

  // 是否禁用
  if (['select'].includes(type)) {
    // args.renderOptions['enabled'] = !col.disabled;
    renderName = 'editRender';
  }

  // 渲染选项(组件接受的选项)
  const $renderOptions: any = { name: JVxeTypePrefix + type };
  col[renderName] = $renderOptions;

  console.log(111111111);
  // console.log(args);

  handleDict(args);

  if (col.cellRender) {
    Object.assign(col.cellRender, args.renderOptions);
  }

  if (col.editRender) {
    Object.assign(col.editRender, args.renderOptions);
  }

  console.log(col);

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
async function handleDict({ col, methods }: HandleArgs) {
  if (col && col.params.dictCode) {
    /** 加载数据字典并合并到 options */
    try {
      // 查询字典
      col.params.optionsPromise = new Promise(async (resolve) => {
        let dictCodeString = col.params.dictCode;
        if (dictCodeString) {
          dictCodeString = encodeURI(dictCodeString);
        }
        // console.log(dictCodeString);
        // 导入本地数据字典
        const dictOptions: any = await initDictOptions(dictCodeString);
        const options = col.params.options ?? [];
        // console.log(dictOptions.data[dictCodeString]);
        dictOptions.data[dictCodeString].forEach((dict: any) => {
          // 过滤重复数据
          if (options.findIndex((o: any) => o.value === dict.value) === -1) {
            options.push(dict);
          }
        });
        resolve(options);
      });
      col.params.options = await col.params.optionsPromise;
      await nextTick();
      await methods.getXTable().updateData();
    } catch (error) {
      console.group(`[JVxeTabel] 查询字典"${col.params.dictCode}" 时发生异常！ `);
      console.warn(error);
      console.groupEnd();
    }
  }
}
