import { ElPagination } from 'element-plus';
import { VxeTableProps } from '../types';

export function usePagination(props: VxeTableProps) {
  const innerPagination = reactive({
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 50],
    total: 100,
    background: true,
  });

  const bindProps = computed(() => {
    return {
      ...innerPagination,
      ...props.pagerConfig,
    };
  });
  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`);
  };
  const handleCurrentChange = (val: number) => {
    console.log(`当前页: ${val}`);
  };
  console.log(bindProps.value);

  /** 渲染分页器 */
  function renderPagination() {
    const VNode = (
      <div>
        <ElPagination
          currentPage={1}
          pageSize={10}
          pageSizes={[10, 20, 30, 50]}
          total={100}
          disabled={false}
          on-SizeChange={handleSizeChange}
          on-CurrentChange={handleCurrentChange}
        ></ElPagination>
      </div>
    );
    return VNode;
  }

  return { renderPagination };
}
