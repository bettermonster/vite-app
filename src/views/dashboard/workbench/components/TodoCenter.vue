<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>待办中心</span>
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
  const todoList = reactive([
    {
      title: '我的代办',
      path: '',
    },
  ]);

  defineProps({
    loading: {
      type: Boolean,
    },
  });
</script>

<style scoped></style>
