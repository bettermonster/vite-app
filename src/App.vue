<template>
  <el-config-provider :locale="locale">
    <AppProvider> <router-view /> </AppProvider>
  </el-config-provider>
</template>
<script setup lang="ts">
  import { AppProvider } from '/@/components/Appliction';
 
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

  const locale = ref(zhCn);
</script>
