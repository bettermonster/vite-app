<template>
  <ElSelect v-model="value" placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </ElSelect>
  <!-- <el-input v-model="input" placeholder="Please input" /> -->
</template>

<script setup lang="ts">
  const value = ref('');
  const input = ref('');

  const options = [ 
    {
      value: 'Option1',
      label: 'Option1',
    },
    {
      value: 'Option2',
      label: 'Option2',
    },
    {
      value: 'Option3',
      label: 'Option3',
    },
    {
      value: 'Option4',
      label: 'Option4',
    },
    {
      value: 'Option5',
      label: 'Option5',
    },
  ];
  // import { propTypes } from '/@/utils/propTypes';

  // const props = defineProps({
  //   type: propTypes.string,
  //   params: propTypes.any,
  //   renderOptions: propTypes.any,
  // });

  // console.log(props);
  // let { row, column } = reactive(props.params);
</script>

<style scoped></style>
