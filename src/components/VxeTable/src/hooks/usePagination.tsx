import { ElPagination } from 'element-plus';
import 'element-plus/es/components/Pagination/style/css';
import { VxeTableProps } from '../types';
import { isEmpty } from '../../../../utils/is';

export function usePagination(props: VxeTableProps, methods: any) {
  const innerPagination = reactive({
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 50],
    total: 100,
    background: true,
    layout: 'total, sizes, prev, pager, next, jumper',
  });

  const bindProps = computed(() => {
    return {
      ...innerPagination,
      ...props.pagerConfig,
    };
  });

  function handleSizeChange(pageSize: number) {
    innerPagination.pageSize = pageSize;
    methods.trigger('pageChange', { currentPage: unref(bindProps).currentPage, pageSize });
  }

  function handleCurrentChange(currentPage: number) {
    innerPagination.currentPage = currentPage;
    methods.trigger('pageChange', { currentPage, pageSize: unref(bindProps).pageSize });
  }

  /** 渲染分页器 */
  function renderPagination() {
    if (props.pagerConfig && !isEmpty(props.pagerConfig)) {
      const VNode = (
        <div class={'yu-vxe-pagination'}>
          <ElPagination
            {...bindProps.value}
            onUpdate:page-size={handleSizeChange}
            onUpdate:current-page={handleCurrentChange}
          ></ElPagination>
        </div>
      );
      // return h('div', {}, [
      //   h(ElPagination, {
      //     ...bindProps.value,
      //     onSizeChange: handleSizeChange,
      //     onCurrentChange: handleCurrentChange,
      //   }),
      // ]);
      return VNode;
    } else {
      return null;
    }
  }

  return { renderPagination };
}
