import { propTypes } from '/@/utils/propTypes';

// 这里接收组件参数和设置默认值
export const vxeProps = () => ({
  keyField: propTypes.string.def('id'),
  // 列配置
  columns: propTypes.array.isRequired,
  // 数据
  data: propTypes.array.isRequired,
});
