<template>
  <div>1111 {{ obj.num }} </div>
</template>

<script setup lang="ts">
  let obj = reactive({});

  setTimeout(() => {
    obj = { name: '123', num: 20 };
    Object.assign(obj, { name: '123', num: 20 });
  }, 2000);

  setInterval(() => {
    obj.num++;
  }, 1000);
</script>

<style scoped></style>
