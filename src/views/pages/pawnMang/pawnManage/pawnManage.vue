<template>
  <div class="m-4 p-4 bg-white">
    <!-- <VxeTable /> -->
    <JVxeTable
      ref="tableRef"
      :loading="table1.loading"
      align="center"
      row-number
      :height="table1.height"
      :data="table1.data"
      :pager-config="table1.pagerConfig"
      :columns="table1Column"
      border
      @page-change="handleTable1PageChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { JVxeTypes, JVxeColumn } from '/@/components/VxeTable/types';
  import { JVxeTable } from '/@/components/VxeTable';
  import { VxeGridProps } from 'vxe-table';
  import { getGodsInfoList } from '/@/api/view/pawnMange';

  const table1 = reactive<VxeGridProps>({
    height: 400,
    border: true,
    loading: true,
    pagerConfig: {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pageSizes: [10, 20, 30, 100, 200],
    },
    data: [],
  });

  const table1Column = ref([
    { field: 'id', title: 'ID', type: JVxeTypes.hidden },
    { field: 'godsId', title: '物品编号', type: JVxeTypes.hidden },
    { field: 'godsName', title: '物品名称' },
    { field: 'godsType', title: '物品类型' },
    { field: 'pawnTicket', title: '当票号' },
    { field: 'scustName', title: '客户名称' },
    { field: 'cardType', title: '证件类型', type: JVxeTypes.normal, dictCode: 'certType', options: [] },
    { field: 'cardNum', title: '证件号码', width: '200px' },
    { field: 'godsStas', title: '物品状态' },
    { field: 'godsBusiStas', title: '物品业务状态' },
    { field: 'isRelaBarcode', title: '是否已关联封条码' },
    { field: 'managerName', title: '申请人' },
    { field: 'managOrgName', title: '申请机构', width: '200px' },
    { field: 'pawn', title: '当物资料', fixed: 'right' },
  ]);

  onMounted(async () => {
    loadTable1Data();
  });

  // gridOptions.data = godsInfoList;

  function handleTable1PageChange(event: any) {
    table1.pagerConfig!.currentPage = event.currentPage;
    table1.pagerConfig!.pageSize = event.pageSize;
    loadTable1Data();
  }

  async function loadTable1Data() {
    table1.loading = true;
    // 获取当物信息列表
    try {
      const getTable1FormData = { page: table1.pagerConfig?.currentPage, size: table1.pagerConfig?.pageSize };
      const godsInfoList = await getGodsInfoList(getTable1FormData);
      table1.pagerConfig!.total = godsInfoList.total;
      table1.data = godsInfoList.data;
    } catch (error) {
      console.log('获取信息失败', error);
    } finally {
      table1.loading = false;
    }
  }
</script>

<style scoped></style>
