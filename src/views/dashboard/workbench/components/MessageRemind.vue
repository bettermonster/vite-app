<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>消息提醒</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
