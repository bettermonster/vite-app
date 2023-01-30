<template>
  <div :class="prefixCls">
    content
    <button @click="shepi">清除token</button>
    <RouterView />
  </div>
</template>
  
<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useUserStore } from '/@/store/modules/user';

  const { prefixCls } = useDesign('layout-content');

  function shepi() {
    const userStore = useUserStore();
    userStore.logout();
  }
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls}{
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
  }
</style>
