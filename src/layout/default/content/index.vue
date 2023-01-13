<template>
  <div>
    content
    <button @click="shepi">清除token</button>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '/@/store/modules/user';

  function shepi() {
    const userStore = useUserStore();
    userStore.logout();
  }
</script>

<style scoped></style>
