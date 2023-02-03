import { VxeTableProps } from '../types/index';
import { useDesign } from '/@/hooks/web/useDesign';

export function useData(props: VxeTableProps) {
  const { prefixCls } = useDesign('vxe-table');
  return {
    preifxCls: prefixCls,
    defaultVxeProps: {
      keyField: props.keyField,
      isHover: true,
    },
  };
}
