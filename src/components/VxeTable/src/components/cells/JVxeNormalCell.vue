<template>
  <div> {{ row[column.field] }}</div>
</template>

<script setup lang="ts">
  import { propTypes } from '/@/utils/propTypes';

  const props = defineProps({
    type: propTypes.string,
    params: propTypes.any,
    renderOptions: propTypes.any,
  });

  console.log(props);
  let { row, column } = reactive(props.params);
</script>

<style scoped></style>
