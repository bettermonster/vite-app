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
    console.log(1111111111111111);
    console.log(data);

    setTimeout(() => {
      loading.value = false;
    }, 1500); 
    return { loading, props };
  },
  render() {
    console.log(this.props.columns);
    const vnode = (
      <div>
        <Loading loading={this.loading}>
          <VxeGrid data={this.props.data} columns={this.props.columns as any}></VxeGrid>
        </Loading>
      </div>
    );
    return vnode;
  },
});
