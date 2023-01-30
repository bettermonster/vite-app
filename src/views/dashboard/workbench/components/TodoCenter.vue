<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>待办中心</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>

<script setup lang="ts">
  const todoList = reactive([
    {
      title: '我的代办',
      path: ''
    },
  ]);
</script>

<style scoped></style>
