<template>
  <el-dropdown>
    <span :class="`${prefixCls}`">
      <img :class="`${prefixCls}__header`" :src="avatarUrl" />
      <span class="truncate" :class="`${prefixCls}__name`">{{ getUserInfo.userName }}</span>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useUserStore } from '/@/store/modules/user';

  const { prefixCls } = useDesign('header-user-dropdown');
  const avatarUrl = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
  const userStore = useUserStore();

  const getUserInfo = computed(() => {
    return userStore.getUserInfo;
  });
</script>

<style scoped lang="less">
  @prefix: ~'@{namespace}-header-user-dropdown';

  .@{prefix} {
    height: 48px;
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
    padding: 0 10px;

    &__header {
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    &__name {
      font-size: 14px;
      display: inline-block;
      max-width: 200px;
    }
  }
</style>
