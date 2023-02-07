// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { Loading } from '../../Loading';
import { VxeGrid } from 'vxe-table';
import { useData } from './hooks/useData';

export default defineComponent({
  name: 'VxeTable',
  props: vxeProps(),
  // inheritAttrs: false,
  setup(props) {
    const loading = ref(true);
    const data = useData(props);
    console.log(data);

    setTimeout(() => {
      loading.value = false;
    }, 1500);
    return { loading, props };
  },
  render() {
    const vnode = (
      <div>
        <Loading loading={this.loading}>
          <VxeGrid
            data={this.props.data}
            columns={this.props.columns as any}
            border={this.props.border}
            align={this.props.align}
          ></VxeGrid>
        </Loading>
      </div>
    );
    return vnode;
  },
});
