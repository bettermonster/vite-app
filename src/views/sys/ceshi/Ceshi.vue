<template>
  <div>
    123123
    <JVxeTable :data="gridOptions.data" :pager-config="gridOptions.pagerConfig" :columns="gridOptions.columns" />
  </div>
</template>

<script setup lang="ts">
  import { JVxeTable } from '/@/components/VxeTable';

  import { VxeGridProps } from 'vxe-table';

  const gridOptions = reactive<VxeGridProps>({
    columns: [
      { type: 'seq', width: 50 },
      { field: 'name', title: 'Name'},
      { field: 'sex', title: 'Sex', showHeaderOverflow: true },
      { field: 'address', title: 'Address', showOverflow: true },
    ],
    pagerConfig: {
      currentPage: 1,
      pageSize: 5,
      total: 6,
      pageSizes: [5, 20, 30, 100, 200],
    },
    data: [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    ],
  });
</script>

<style scoped></style>
