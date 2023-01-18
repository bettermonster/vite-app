<template>
  <el-menu
    :class="prefixCls"
    default-active="2"
    :collapse="isCollapse"
    popper-effect="dark"
    :unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <BasicSubMenu v-for="item in backMenuList" :key="item.path" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
  import BasicSubMenu from './components/BasicSubMenu.vue';
  import { Menu } from '../../../router/types';
  import { PropType } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('basic-menu');
  const isCollapse = ref(false);
  defineProps({
    backMenuList: {
      type: Array as PropType<Menu[]>,
      default: () => [],
    },
  });
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>

<style lang="less">
  @import './index.less';
</style>
