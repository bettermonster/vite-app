import { VxeTableProps } from '../types/index';
import { useDesign } from '/@/hooks/web/useDesign';

export function useData(props: VxeTableProps) {
  console.log(props);
  const { prefixCls } = useDesign('vxe-table');
  return {
    prefixCls: prefixCls,
    // column数据
    vxeColumns: undefined,
    // 因为pagination默认参数比较多久不放这里了
    // table数据
    vxeData: ref([]),
    defaultVxeProps: {
      // 高亮hover的行
      highlightHoverRow: true,
    },
  };
}
