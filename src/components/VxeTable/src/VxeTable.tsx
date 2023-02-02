// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { Loading } from '../../Loading';

export default defineComponent({
  name: 'VxeTable',
  inheritAttrs: false,
  props: vxeProps(),
  setup(props) {
    console.log(props);
    const loading = ref(true);
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    return { loading };
  },
  render() {
    const vnode = (
      <div>
        <Loading loading={this.loading}>11111{String(this.loading)}111</Loading>
      </div>
    );
    return vnode;
  },
});
