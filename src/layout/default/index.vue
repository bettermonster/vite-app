<template>
  <div>
    <LayoutHeader />
    <div>
      <LayoutSider />
      <div>
        <!-- <LayoutMultipleHeader /> -->
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import LayoutHeader from './header/index.vue';
  import LayoutContent from './content/index.vue';
</script>

<style scoped></style>
