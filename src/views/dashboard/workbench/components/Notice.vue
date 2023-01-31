<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>公告</span>
      </div>
    </template>
    <el-skeleton :loading="loading" animated>
      <template #default>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </template>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style scoped></style>
