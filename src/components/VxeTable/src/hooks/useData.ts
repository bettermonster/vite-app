import { VxeGridInstance } from 'vxe-table';
import { JVxeRefs, VxeTableProps } from '../types/index';
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
      // 虚拟滚动配置，y轴大于xx条数据时启用虚拟滚动
      scrollY: {
        gt: 30,
      },
      scrollX: {
        gt: 20,
        // 暂时关闭左右虚拟滚动
        enabled: false,
      },
      // 高亮hover的行
      highlightHoverRow: true,
    },
  };
}

export function useRefs(): JVxeRefs {
  return {
    gridRef: ref<VxeGridInstance>(),
    what: ref<any>(),
  };
}
