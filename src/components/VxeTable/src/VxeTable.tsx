// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { Loading } from '../../Loading';
import { VxeGrid } from 'vxe-table';
import { useData } from './hooks/useData';
import { useRenderComponents } from './hooks/useRenderComponents';
import { useColumns } from './hooks/useColumns';
import { useMethods } from './hooks/useMethods';
import { useDataSource } from './hooks/useDataSource';
import { useFinallyProps } from './hooks/useFinallyProps';
import './style/index.less';

export default defineComponent({
  name: 'VxeTable',
  props: vxeProps(),
  emits: ['pageChange'],
  // inheritAttrs: false,
  setup(props, context) {
    // 拿到对应的props转化为 响应式数据
    const data = useData(props);
    // const slots = useSlots();

    // 注册一些对应的table 方法。
    const { methods } = useMethods(props, context);

    useColumns(props, data);
    useDataSource(props, data);

    // 最终传入到 vxeTable 里的值
    const { vxeProps, prefixCls } = useFinallyProps(props, data);

    // 注册组件
    const { renderPagination } = useRenderComponents(props, data, methods);

    console.log(prefixCls);
    console.log({ ...vxeProps.value });
    // return {
    //   loading,
    //   props,
    //   renderPagination,
    //   prefixCls,
    //   vxeProps,
    //   vxeData: data.vxedata,
    // };
    return () => {
      return (
        <div class={prefixCls}>
          <Loading loading={props.loading}>
            <VxeGrid class={`${prefixCls}-scroll`} {...vxeProps.value} data={data.vxeData.value}></VxeGrid>
            {renderPagination()}
          </Loading>
        </div>
      );
    };
  },
  // render() {
  //   const vnode = (
  //     <div>
  //       <Loading loading={this.loading}>
  //         <VxeGrid {...this.vxeProps} data={this.vxeData}></VxeGrid>
  //         {this.renderPagination()}
  //       </Loading>
  //     </div>
  //   );
  //   return vnode;
  // },
});
