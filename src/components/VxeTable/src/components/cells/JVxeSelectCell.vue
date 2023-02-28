<template>
  <ElSelect v-model="cardType" placeholder="Select">
    <el-option v-for="option in selectOptions" :key="option.key" :value="option.value" :disabled="option.disabled" />
  </ElSelect>
</template>

<script setup lang="ts">
  import { useJVxeCompProps } from '../../hooks/useJVxeComponent';
  let cardType = ref('');
  let selectOptions = ref<any>([]);
  const props = defineProps(useJVxeCompProps());
  console.log(props);
  let { row, column } = reactive(props.params);
  cardType = row.cardType;
  selectOptions = column.params.options;
</script>

<style scoped></style>
