<template>
  <div :class="prefixCls"> MultipleTabs</div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('header-multipleTabs');
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-header-multipleTabs';

  .@{prefix-cls} {
    display: flex;
    height: 32px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
  }
</style>
