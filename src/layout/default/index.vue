<template>
  <el-container :class="prefixCls">
    <el-container>
      <LayoutSider />
      <el-container :class="`${prefixCls}-main`">
        <el-scrollbar>
          <LayoutMultipleHeader />
          <LayoutContent />
          <LayoutFooter />
        </el-scrollbar>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import LayoutSider from './sider/index.vue';
  import LayoutContent from './content/index.vue';
  import LayoutMultipleHeader from './header/MultipleHeader.vue';
  import LayoutFooter from './footer/index.vue';

  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('default-layout');
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #f4f7f9;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
      flex-direction: column;
    }
  }
</style>
