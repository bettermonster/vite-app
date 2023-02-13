// 组件类型
export enum JVxeTypes {
  select = 'select',
  normal = 'normal',
}

// 为了防止和 vxe 内置的类型冲突，所以加上一个前缀
// 前缀是自动加的，代码中直接用就行（JVxeTypes.input）
export const JVxeTypePrefix = 'j-';
