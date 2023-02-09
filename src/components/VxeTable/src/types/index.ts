import { ComputedRef, ExtractPropTypes, Ref } from 'vue';
import { vxeProps } from '../vxe.data';
export type VxeTableProps = Partial<ExtractPropTypes<ReturnType<typeof vxeProps>>>;
// export type VxeTableProps = Partial<ReturnType<typeof vxeProps>>;

export interface VxeDataProps {
  prefixCls: string;
  vxeColumns?: ComputedRef<object[]>;
  vxedata: Ref<Recordable[]>;
  defaultVxeProps: object;
}
