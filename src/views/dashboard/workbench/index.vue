<template>
  <div class="p-4">
    <div class="mb-4 flex">
      <div class="w-8/12">
        <!-- 待办中心 -->
        <TodoCenter :loading="loading" />
      </div>
      <div class="w-4/12 pl-4">
        <!-- 消息提醒 -->
        <MessageRemind :loading="loading" />
        <!-- 公告展示 -->
      </div>
    </div>
    <div class="flex">
      <div class="w-4/12"> <BusinessStatistics :loading="loading" /></div>
      <div class="w-4/12 pl-4"><BusinessStatistics :loading="loading" /></div>
      <div class="w-4/12 pl-4"><BusinessStatistics :loading="loading" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TodoCenter from './components/TodoCenter.vue';
  import MessageRemind from './components/MessageRemind.vue';
  import BusinessStatistics from './components/BusinessStatistics.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

<style scoped></style>
