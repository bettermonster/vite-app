<template>
  <div>
    <el-icon><location /></el-icon> <span>{{ item.name }}</span>
  </div>
</template>

<script setup lang="ts">
  import { Location } from '@element-plus/icons-vue';
  defineProps({
    item: {
      type: Object as any,
      default: () => ({}),
    },
  });
</script>

<style scoped></style>
