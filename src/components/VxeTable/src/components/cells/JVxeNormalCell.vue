<template>
  <div class="j-vxe-reload-effect-box">
    <span class="j-vxe-reload-effect-span layer-bottom">{{ row[column.field] }}</span>
  </div>
</template>

<script setup lang="ts">
  import { propTypes } from '/@/utils/propTypes';

  const props = defineProps({
    type: propTypes.string,
    params: propTypes.any,
    renderOptions: propTypes.any,
  });

  // console.log(props);
  let { row, column } = reactive(props.params);
</script>

<style scoped></style>
