<template>
  <el-header :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">left</div>
    <!-- action -->
    <div :class="`${prefixCls}-action`">
      <!-- full screen -->
      <FullScreen :class="`${prefixCls}-action__item fullscreen-item`" />
    </div>
  </el-header>
</template>

<script setup lang="ts">
  import FullScreen from './components/FullScreen.vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('layout-header');
  const getHeaderClass = computed(() => {
    return [prefixCls, { [`${prefixCls}--fixed`]: true }];
  });
</script>

<style lang="less">
  @import './index.less';
</style>
