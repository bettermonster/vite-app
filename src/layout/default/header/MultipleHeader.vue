<template>
  <div v-if="getIsShowPlaceholderDom" :style="getPlaceholderDomStyle"></div>
  <div :class="getClass"><LayoutHeader /> <div> multipleHeader</div></div>
</template>

<script setup lang="ts">
  import LayoutHeader from './index.vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('layout-multiple-header');

  const HEADER_HEIGHT = 48;

  const TABS_HEIGHT = 32;

  const getClass = computed(() => {
    return [prefixCls, `${prefixCls}--fixed`];
  });
  const getPlaceholderDomStyle = computed(() => {
    let height = 0;
    height += HEADER_HEIGHT;
    height += TABS_HEIGHT;
    return {
      height: `${height}px`,
    };
  });

  const getIsShowPlaceholderDom = ref(true);
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-layout-multiple-header';

  .@{prefix-cls}{
    flex: 0 0 auto;

    &--fixed {
        position: fixed;
        top: 0;
        width: calc(100% - 210px);
    }
  }
</style>
