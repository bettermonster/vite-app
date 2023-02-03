<template>
  <div>
    <MVxeTable :data="gridOptions.data" :columns="gridOptions.columns" />
  </div>
</template>

<script setup lang="ts">
  import { VxeGridProps } from 'vxe-table';
  interface UserVO {
    id: number;
    name: string;
    role: string;
    sex: string;
    age: number;
    address: string;
  }

  const gridOptions = reactive<VxeGridProps<UserVO>>({
    columns: [
      { type: 'seq', width: 50 },
      { field: 'name', title: 'Name', slots: { default: 'name' } },
      { field: 'sex', title: 'Sex', showHeaderOverflow: true },
      { field: 'address', title: 'Address', showOverflow: true },
    ],
    data: [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    ],
  });
</script>

<style scoped></style>
