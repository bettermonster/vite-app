import { ComputedRef, ExtractPropTypes, Ref } from 'vue';
import type { VxeColumnProps } from 'vxe-table/types/column';
import { vxeProps } from '../vxe.data';
export type VxeTableProps = Partial<ExtractPropTypes<ReturnType<typeof vxeProps>>>;
// export type VxeTableProps = Partial<ReturnType<typeof vxeProps>>;

export type JVxeColumn = IJVxeColumn & Recordable;

/**
 * JVxe 列配置项
 */
export interface IJVxeColumn extends VxeColumnProps {
  type?: any;
  // 行唯一标识
  field: string;
  // 表单预期值的提示信息，可以使用${...}变量替换文本
  placeholder?: string;
  // 默认值
  defaultValue?: any;
  // 是否禁用当前列，默认false
  disabled?: boolean;
  // 自定义传入组件的其他属性
  props?: Recordable;
  // 【select】
  dictCode?: string; // 字典 code
  options?: { title?: string; label?: string; text?: string; value: any; disabled?: boolean }[]; // 下拉选项列表
  allowInput?: boolean; // 允许输入
  allowSearch?: boolean; // 允许搜索
  // 【下拉字典搜索】
  dict?: string; // 字典表配置信息：数据库表名,显示字段名,存储字段名
}

export interface VxeDataProps {
  prefixCls: string;
  vxeColumns?: ComputedRef<object[]>;
  vxeData: Ref<Recordable[]>;
  defaultVxeProps: object;
}
