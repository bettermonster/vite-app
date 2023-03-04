<template>
  <div :class="prefixCls">
    <!-- <RouterView /> -->
    <RouterView v-slot="{ Component, route }">
      <keep-alive :include="getCaches">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <!-- <component :is="Component" :key="route.fullPath"></component> -->
    </RouterView>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  const { prefixCls } = useDesign('layout-content');
  const tabStore = useMultipleTabStore;

  const getCaches = computed(() => {
    return tabStore.getCachedTabList;
  });
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-content';

  .@{prefix-cls}{
    position: relative;
    flex: 1 1 auto;
    min-height: 0;
  }
</style>
