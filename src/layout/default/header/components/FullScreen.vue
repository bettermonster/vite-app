<template>
  <div>
    <el-tooltip :content="getTitle" placement="bottom" :show-after="500">
      <span @click="toggle">
        <el-icon v-if="!isFullscreen">
          <FullScreen />
        </el-icon>
        <el-icon v-else> <FullScreen /> </el-icon>
      </span>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
  import { useFullscreen } from '@vueuse/core';
  import { FullScreen } from '@element-plus/icons-vue';
  const { isFullscreen, toggle } = useFullscreen();

  const getTitle = computed(() => {
    return unref(isFullscreen) ? '关闭全屏' : '全屏';
  });
</script>

<style scoped></style>
