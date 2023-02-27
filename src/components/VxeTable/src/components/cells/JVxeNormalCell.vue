<template>
  <div class="j-vxe-reload-effect-box">
    <span class="j-vxe-reload-effect-span layer-bottom">{{ innerValue }}</span>
  </div>
</template>

<script setup lang="ts">
  import { useJVxeComponent, useJVxeCompProps } from '../../hooks/useJVxeComponent';
  import { propTypes } from '/@/utils/propTypes';

  const props = defineProps({
    type: propTypes.string,
    params: propTypes.any,
    renderOptions: propTypes.any,
  });

  // console.log(props);
  const setup = useJVxeComponent(props);
  const { innerValue } = setup;
</script>

<style scoped></style>
