// import { VxeTableProps } from './types';
import { vxeProps } from './vxe.data';
import { vLoading } from 'element-plus';

export default defineComponent({
  name: 'VxeTable',
  directives: { loading: vLoading },
  inheritAttrs: false,
  props: vxeProps(),
  setup(props) {
    console.log(props);
    const loading = ref(true);
    const svg = `
    <path class="path" d="
      M 30 15
      L 28 17
      M 25.61 25.61
      A 15 15, 0, 0, 1, 15 30
      A 15 15, 0, 1, 1, 27.99 7.5
      L 15 15
    " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
  `;
    setTimeout(() => {
      loading.value = false;
    }, 3000);
    return { 
      loading,
      svg,
    };
  },
  render() {
    const vnode = (
      <div v-loading={this.loading} element-loading-svg={this.svg} element-loading-svg-view-box="-10, -10, 50, 50">
        loading
      </div>
    );
    return vnode; 
  },
});
