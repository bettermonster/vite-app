import { ExtractPropTypes } from 'vue';
import { vxeProps } from '../vxe.data';
export type VxeTableProps = Partial<ExtractPropTypes<ReturnType<typeof vxeProps>>>;
// export type VxeTableProps = Partial<ReturnType<typeof vxeProps>>;
