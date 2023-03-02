<template>
  <el-collapse v-model="activeName" class="m-4 p-4 bg-white">
    <el-collapse-item title="Consistency" name="1"> 123 </el-collapse-item>
    <el-collapse-item title="Consistency" name="2"> 12312453534 </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeName = ref('1');
</script>

<style scoped></style>
