// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { Loading } from '../../Loading';
import { VxeGrid } from 'vxe-table';
import { useData } from './hooks/useData';
import { useRenderComponents } from './hooks/useRenderComponents';
import { useColumns } from './hooks/useColumns';
import { useDataSource } from './hooks/useDataSource';
import { useFinallyProps } from './hooks/useFinallyProps';

export default defineComponent({
  name: 'VxeTable',
  props: vxeProps(),
  // inheritAttrs: false,
  setup(props) {
    const loading = ref(true);
    // 拿到对应的props转化为 响应式数据
    const data = useData(props);
    useColumns(props, data);
    useDataSource(props, data);

    // 最终传入到 vxeTable 里的值
    const { vxeProps, prefixCls } = useFinallyProps(props, data);

    // 注册组件
    const { renderPagination } = useRenderComponents(props, data);

    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return { loading, props, renderPagination, prefixCls, vxeProps, vxeData: data.vxedata };
  },
  render() {
    const vnode = (
      <div>
        <Loading loading={this.loading}>
          {/* <VxeGrid {...this.vxeProps} data={this.vxeData}></VxeGrid> */}
          {this.renderPagination()}
        </Loading>
      </div>
    );
    return vnode;
  },
});
