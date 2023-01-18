<template>
  <!-- 没有children菜单 -->
  <BasicMenuItem v-if="!menuHasChildren(item)" :item="item" />
  <!-- 有children菜单 -->
  <el-sub-menu v-if="menuHasChildren(item)" popper-class="darks" :index="item.path">
    <template #title>
      <MenuItemContent :item="item" />
    </template>

    <BasicSubMenu v-for="childrenItem in item.children" :key="childrenItem.path" :item="childrenItem" />
  </el-sub-menu>
</template>

<script setup lang="ts">
  import BasicMenuItem from './BasicMenuItem.vue';
  import MenuItemContent from './MenuItemContent.vue';
  defineProps({
    item: {
      type: Object as any,
      default: () => ({}),
    },
  });

  function menuHasChildren(menuTreeItem: any) {
    return Reflect.has(menuTreeItem, 'children') && !!menuTreeItem.children && menuTreeItem.children.length > 0;
  }
</script>

<style scoped></style>
