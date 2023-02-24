// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { Loading } from '../../Loading';
import { VxeGrid, VxeGridInstance } from 'vxe-table';
import { useData, useRefs } from './hooks/useData';
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
  expose: ['what3'],
  // inheritAttrs: false,
  setup(props, context) {
    // const instanceRef = ref();
    // console.log('instanceRef', instanceRef);
    const refs = useRefs();
    // 拿到对应的props转化为 响应式数据
    const data = useData(props);
    // const slots = useSlots();

    // 注册一些对应的table 方法。
    const { methods } = useMethods(props, context, refs);

    useColumns(props, data, methods);
    useDataSource(props, data, refs);

    // 最终传入到 vxeTable 里的值
    const { vxeProps, prefixCls } = useFinallyProps(props, data, refs);

    // 注册组件
    const { renderPagination } = useRenderComponents(props, data, methods);

    // console.log(prefixCls);
    console.log({ ...vxeProps.value });
    // return {
    //   loading,
    //   props,
    //   renderPagination,
    //   prefixCls,
    //   vxeProps,
    //   vxeData: data.vxedata,
    // };
    return () => (
      <div class={prefixCls}>
        <Loading loading={props.loading}>
          <VxeGrid class={`${prefixCls}-scroll`} {...vxeProps.value} data={data.vxeData.value}></VxeGrid>
          {renderPagination()}
        </Loading>
      </div>
    );
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
