<template>
  <div class="m-4 p-4 bg-white">
    <!-- <VxeTable /> -->
    <JVxeTable align="center" :data="gridOptions.data" :columns="gridOptions.columns" border />
  </div>
</template>

<script setup lang="ts">
  import { JVxeTable } from '/@/components/VxeTable';
  import { VxeGridProps } from 'vxe-table';
  import { getGodsInfoList } from '/@/api/view/pawnMange';

  // 获取当物信息列表
  const getPawnDataParams = reactive({ page: 1, size: 10 });
  const godsInfoList = getGodsInfoList(unref(getPawnDataParams));
  console.log(11111111111111);
  console.log(godsInfoList);

  interface UserVO {
    id: number;
    name: string;
    role: string;
    sex: string;
    age: number;
    address: string;
  }

  const gridOptions = reactive<VxeGridProps<UserVO>>({
    border: true,
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
</script>

<style scoped></style>
