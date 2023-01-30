<template>
  <div :class="prefixCls">
    <RouterView />
  </div>
</template>
  
<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('layout-content');

</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls}{
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
  }
</style>
