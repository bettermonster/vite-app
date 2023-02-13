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
  key: string;
  // 表单预期值的提示信息，可以使用${...}变量替换文本
  placeholder?: string;
  // 默认值
  defaultValue?: any;
  // 是否禁用当前列，默认false
  disabled?: boolean;
  // 校验规则 TODO 类型待定义
  validateRules?: any;
  // 联动下一级的字段key
  linkageKey?: string;
  // 自定义传入组件的其他属性
  props?: Recordable;
  allowClear?: boolean; // 允许清除
  // 【inputNumber】是否是统计列，只有 inputNumber 才能设置统计列。统计列：sum 求和；average 平均值
  statistics?: boolean | [statisticsTypes, statisticsTypes?];
  // 【select】
  dictCode?: string; // 字典 code
  options?: { title?: string; label?: string; text?: string; value: any; disabled?: boolean }[]; // 下拉选项列表
  allowInput?: boolean; // 允许输入
  allowSearch?: boolean; // 允许搜索
  // 【slot】
  slotName?: string; // 插槽名
  // 【checkbox】
  customValue?: [any, any]; // 自定义值
  defaultChecked?: boolean; // 默认选中
  // 【upload】 upload
  btnText?: string; // 上传按钮文字
  token?: boolean; // 是否传递 token
  responseName?: string; // 返回取值名称
  action?: string; // 上传地址
  allowRemove?: boolean; // 是否允许删除
  allowDownload?: boolean; // 是否允许下载
  // 【下拉字典搜索】
  dict?: string; // 字典表配置信息：数据库表名,显示字段名,存储字段名
  async?: boolean; // 是否同步模式
  tipsContent?: string;
  // 【popup】
  popupCode?: string;
  field?: string;
  orgFields?: string;
  destFields?: string;
}


export interface VxeDataProps {
  prefixCls: string;
  vxeColumns?: ComputedRef<object[]>;
  vxeData: Ref<Recordable[]>;
  defaultVxeProps: object;
}
