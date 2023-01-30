<template>
  <div :class="prefixCls" @click="toggleCollapsed">
    <el-icon v-if="getCollapsed"><Expand /></el-icon>
    <el-icon v-else><Fold /></el-icon>
  </div>
</template>

<script setup lang="ts">
  import { Expand, Fold } from '@element-plus/icons-vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('layout-header-trigger');
  //   这个设置需要通知 Menu组件，如果不用 store，使用 mitt也行
  const collapsed = ref(true);
  const getCollapsed = computed(() => {
    return collapsed.value ? true : false;
  });
  function toggleCollapsed() {
    collapsed.value = !collapsed.value;
  }
</script>

<style scoped></style>
