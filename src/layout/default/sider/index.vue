<template>
  <div :style="getHiddenDomStyle"></div>
  <el-aside style="width: 210px" :class="prefixCls">
    <LayoutMenu />
  </el-aside>
</template>

<script setup lang="ts">
  import LayoutMenu from '../menu/index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { CSSProperties } from 'vue';

  const { prefixCls } = useDesign('layout-sideBar');

  const getHiddenDomStyle = computed((): CSSProperties => {
    const width = '210px';
    return {
      width: width,
      overflow: 'hidden',
      flex: `0 0 ${width}`,
      maxWidth: width,
      minWidth: width,
      transition: 'all 0.2s',
    };
  });
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-sideBar';

  .@{prefix-cls} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #001529;
  }
</style>
