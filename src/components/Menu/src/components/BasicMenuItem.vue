<template>
  <el-menu-item :index="item.path"><MenuItemContent :item="item" /></el-menu-item>
</template>

<script setup lang="ts">
  defineProps({
    item: {
      type: Object as any,
      default: () => ({}),
    },
  });
</script>

<style scoped></style>
