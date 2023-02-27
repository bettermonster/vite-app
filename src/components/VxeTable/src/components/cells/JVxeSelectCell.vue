<template>
  <ElSelect v-model="cardType" placeholder="Select" disabled>
    <el-option v-for="option in selectOptions" :key="option.value" :value="option.value" :disabled="option.disabled" />
  </ElSelect>
</template>

<script setup lang="ts">
  import { propTypes } from '/@/utils/propTypes';
  let cardType = ref('');
  let selectOptions = ref<any>([]);
  alert(1);
  const props = defineProps({
    type: propTypes.string,
    params: propTypes.any,
    renderOptions: propTypes.any,
  });
  console.log(props);
  let { row, column } = reactive(props.params);
  cardType = row.cardType;
  selectOptions = column.params.options;
</script>

<style scoped></style>
