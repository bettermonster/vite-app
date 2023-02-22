import { propTypes } from '/@/utils/propTypes';

// 这里接收组件参数和设置默认值
export const vxeProps = () => ({
  keyField: propTypes.string.def('id'),
  // 列配置
  columns: propTypes.array.isRequired,
  // 数据
  data: propTypes.array.isRequired,
  // 是否有序号列
  rowNumber: propTypes.bool.def(false),
  // 表格
  border: propTypes.bool.def(false),
  // 对齐方式
  align: propTypes.any,
  // 分页参数 通过 函数() => {} 返回可以有响应性
  pagerConfig: propTypes.object.def({}),
  // 页面是否在加载中
  loading: propTypes.bool.def(false),
  // 表格高度
  height: propTypes.oneOfType([propTypes.number, propTypes.string]).def('auto'),
  maxHeight: propTypes.number.def(),
});
