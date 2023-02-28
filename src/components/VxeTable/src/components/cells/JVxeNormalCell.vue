<template>
  <div class="j-vxe-reload-effect-box">
    <span class="j-vxe-reload-effect-span layer-bottom">{{ innerValue }}</span>
  </div>
</template>

<script setup lang="ts">
  import { useJVxeComponent, useJVxeCompProps } from '../../hooks/useJVxeComponent';
  const props = defineProps(useJVxeCompProps());
  const { innerValue } = useJVxeComponent(props);
</script>

<style scoped></style>
