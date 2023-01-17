<template>
  <el-menu
    active-text-color="#fff"
    background-color="#001529"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#ffffffb3"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <BasicSubMenu v-for="item in backMenuList" :key="item.path" :item="item" />
  </el-menu>
</template>

<script setup lang="ts">
  import BasicSubMenu from './components/BasicSubMenu.vue';
  import { Menu } from '/@/router/types';
  const isCollapse = ref(false);
  const backMenuList: Menu[] = reactive([
    {
      name: '我的工作台',
      path: 'zxcv',
      children: [
        { name: '我的工作台', path: '12asdf13' },
        { name: '我的工作台', path: 'asdfasdf' },
      ],
    },
    {
      name: '我的',
      path: '123',
    },
  ]);
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
  };
</script>

<style scoped></style>
