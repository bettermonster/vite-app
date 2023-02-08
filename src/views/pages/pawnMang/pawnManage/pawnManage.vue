<template>
  <div class="m-4 p-4 bg-white">
    <!-- <VxeTable /> -->
    <JVxeTable align="center" :data="table1.data" :pager-config="table1.pagerConfig" :columns="table1.columns" border />
  </div>
</template>

<script setup lang="ts">
  import { JVxeTable } from '/@/components/VxeTable';
  import { VxeGridProps } from 'vxe-table';
  import { getGodsInfoList } from '/@/api/view/pawnMange';

  interface PawnListType {
    godsId: number;
  }

  const table1 = reactive<VxeGridProps<PawnListType>>({
    border: true,
    pagerConfig: {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pageSizes: [10, 20, 30, 100, 200],
    },
    columns: [
      { type: 'seq', title: '序号' },
      { field: 'godsId', title: '物品编号' },
      { field: 'godsName', title: '物品名称' },
      { field: 'godsType', title: '物品类型' },
      { field: 'pawnTicket', title: '当票号' },
      { field: 'scustName', title: '客户名称' },
      { field: 'cardType', title: '证件类型' },
      { field: 'cardNum', title: '证件号码' },
      { field: 'godsStas', title: '物品状态' },
      { field: 'godsBusiStas', title: '物品业务状态' },
      { field: 'isRelaBarcode', title: '是否已关联封条码' },
      { field: 'managerName', title: '申请人' },
      { field: 'managOrgName', title: '申请机构' },
      { field: '123', title: '当物资料', fixed: 'right' },
    ],
    data: [],
  });

  onMounted(async () => {
    // 获取当物信息列表
    const getTable1FormData = reactive({ page: 1, size: 10 });
    const godsInfoList = await getGodsInfoList(unref(getTable1FormData));
    table1.pagerConfig!.total = godsInfoList.total;
    table1.data = godsInfoList.data;

    console.log(godsInfoList);
  });

  // gridOptions.data = godsInfoList;
</script>

<style scoped></style>
