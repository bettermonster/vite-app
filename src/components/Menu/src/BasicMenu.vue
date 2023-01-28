<template>
  <el-menu
    :class="prefixCls"
    :default-active="menuState.defalutActive"
    :collapse="isCollapse"
    popper-effect="dark"
    :unique-opened="true"
    @select="handleMenuSelect"
  >
    <BasicSubMenu v-for="item in backMenuList" :key="item.path" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
  import BasicSubMenu from './components/BasicSubMenu.vue';
  import { Menu } from '../../../router/types';
  import { PropType } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { RouteLocationNormalizedLoaded } from 'vue-router';
  import { MenuState } from '../types';

  const { prefixCls } = useDesign('basic-menu');
  const isCollapse = ref(false);

  const menuState = reactive<MenuState>({
    defalutActive: '',
  });

  defineProps({
    backMenuList: {
      type: Array as PropType<Menu[]>,
      default: () => [],
    },
  });

  let emit = defineEmits(['menuSelect']);

  listenerRouteChange((route) => {
    handleMenuChange(route);
  });

  function handleMenuSelect(index: string) {
    emit('menuSelect', index);
  }

  function handleMenuChange(route: RouteLocationNormalizedLoaded) {
    console.log(route);
    const path = route.path;
    // setOpenKeys(path);
    menuState.defalutActive = path;
  }

  // const handleOpen = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
  // };
  // const handleClose = (key: string, keyPath: string[]) => {
  //   console.log(key, keyPath);
  // };
</script>

<style lang="less">
  @import './index.less';
</style>
