<template>
  <div class="p-4">
    <div class="mb-4 flex">
      <div class="w-7/12 mr-4">
        <!-- 待办中心 -->
        <TodoCenter />
      </div>
      <div class="w-5/12">
        <!-- 消息提醒 -->
        <MessageRemind />
        <!-- 公告展示 -->
      </div>
    </div>
    <div> 业务统计 </div>
  </div>
</template>

<script setup lang="ts">
  import TodoCenter from './components/TodoCenter.vue';
  import MessageRemind from './components/MessageRemind.vue';
</script>

<style scoped></style>
