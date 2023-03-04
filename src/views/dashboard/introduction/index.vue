<template>
  <el-collapse v-model="activeName" class="m-4 p-4 bg-white">
    <el-collapse-item title="Consistency" name="1">
      <el-form-item label="pas" prop="pass">
        <el-input v-model="pas" autocomplete="off" />
      </el-form-item>
    </el-collapse-item>
    <el-collapse-item title="Consistency" name="2"> 12312453534 </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeName = ref('1');
  const pas = ref(123)
</script>

<style scoped></style>
