import { propTypes } from '/@/utils/propTypes';
import { JVxeRenderType } from '../types/JVxeTypes';
import { isBoolean, isFunction, isObject, isPromise } from '/@/utils/is';

export function useJVxeCompProps() {
  return {
    // 组件类型
    type: propTypes.string,
    // 渲染类型
    renderType: propTypes.string.def('default'),
    // 渲染参数
    params: propTypes.object,
    // 渲染自定义选项
    renderOptions: propTypes.object,
  };
}

export function useJVxeComponent(props: any) {
  const value = computed(() => props.params.row[props.params.column.property]);
  const innerValue = ref(value.value);
  const row = computed(() => props.params.row);
  const rows = computed(() => props.params.data);
  const column = computed(() => props.params.column);
  // 用户配置的原始 column
  const originColumn = computed(() => column.value.params);
  const rowIndex = computed(() => props.params._rowIndex);
  const columnIndex = computed(() => props.params._columnIndex);
  // 表格数据长度
  const fullDataLength = computed(() => props.params.$table.internalData.tableFullData.length);
  // 是否正在滚动中
  const scrolling = computed(() => !!props.renderOptions.scrolling);
  const cellProps = computed(() => {
    const renderOptions = props.renderOptions;
    const col = originColumn.value;

    const cellProps: any = {};

    // 输入占位符
    cellProps['placeholder'] = replaceProps(col, col.placeholder);

    // 解析props
    if (isObject(col.props)) {
      Object.keys(col.props).forEach((key) => {
        cellProps[key] = replaceProps(col, col.props[key]);
      });
    }

    // 判断是否是禁用的列
    cellProps['disabled'] = isBoolean(col['disabled']) ? col['disabled'] : cellProps['disabled'];
    // 判断是否禁用行
    if (renderOptions.isDisabledRow(row.value)) {
      cellProps['disabled'] = true;
    }
    // 判断是否禁用所有组件
    if (renderOptions.disabled === true) {
      cellProps['disabled'] = true;
    }
    //update-begin-author:taoyan date:2022-5-25 for: VUEN-1111 一对多子表 部门选择 不应该级联
    if (col.checkStrictly === true) {
      cellProps['checkStrictly'] = true;
    }
    //update-end-author:taoyan date:2022-5-25 for: VUEN-1111 一对多子表 部门选择 不应该级联

    //update-begin-author:taoyan date:2022-5-27 for: 用户组件 控制单选多选新的参数配置
    if (col.isRadioSelection === true) {
      cellProps['isRadioSelection'] = true;
    } else if (col.isRadioSelection === false) {
      cellProps['isRadioSelection'] = false;
    }
    //update-end-author:taoyan date:2022-5-27 for: 用户组件 控制单选多选新的参数配置

    return cellProps;
  });

  const context = {
    innerValue,
    row,
    rows,
    rowIndex,
    column,
    columnIndex,
    originColumn,
    fullDataLength,
    cellProps,
    scrolling,
  };
  const ctx = { props, context };

  watch(
    value,
    (newValue) => {
      // 验证值格式
      let getValue = enhanced.getValue(newValue, ctx);
      if (newValue !== getValue) {
        // 值格式不正确，重新赋值
        newValue = getValue;
        vModel(newValue, row, column);
      }
      innerValue.value = enhanced.setValue(newValue, ctx);
      // 判断是否启用翻译
      if (props.renderType === JVxeRenderType.spaner && enhanced.translate.enabled === true) {
        if (isFunction(enhanced.translate.handler)) {
          let res = enhanced.translate.handler(newValue, ctx);
          // 异步翻译，可解决字典查询慢的问题
          if (isPromise(res)) {
            res.then((v) => (innerValue.value = v));
          } else {
            innerValue.value = res;
          }
        }
      }
    },
    { immediate: true },
  );
}
