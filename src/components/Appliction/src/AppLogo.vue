<template>
  <div :class="prefixCls">
    <img src="../../../assets/images/logo-min.png" />
    <div class="ml-2 truncate md:opacity-100" :class="`${prefixCls}__title`"> 银丰典当行 </div>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('app-logo');
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls}{
    height: 48px;
    padding: 10px 4px 10px 10px;
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #fff;

    &__title {
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
</style>
