<template>
  <div :class="prefixCls">
    <LayoutHeader />
    <div>
      <LayoutSider />
      <div>
        <!-- <LayoutMultipleHeader /> -->
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LayoutHeader from './header/index.vue';
  import LayoutSider from './sider/index.vue';
  import LayoutContent from './content/index.vue';

  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('default-layout');
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #f1f1f1;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
