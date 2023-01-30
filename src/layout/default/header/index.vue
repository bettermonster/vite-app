<template>
  <el-header :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <layoutTrigger />
      <!-- 面包屑导航 -->
      <span>我的工作台</span>
    </div>
    <!-- action -->
    <div :class="`${prefixCls}-action`">
      <!-- full screen -->
      <FullScreen :class="`${prefixCls}-action__item fullscreen-item`" />

      <UserDropDown />
    </div>
  </el-header>
</template>

<script setup lang="ts">
  import FullScreen from './components/FullScreen.vue';
  import layoutTrigger from '../trigger/HeaderTrigger.vue';
  import UserDropDown from './components/user-dropdown/index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('layout-header');
  const getHeaderClass = computed(() => {
    return [prefixCls, { [`${prefixCls}--fixed`]: true }];
  });
</script>

<style lang="less">
  @import './index.less';
</style>
