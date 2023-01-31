<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>业务统计</span>
      </div>
    </template>
    <el-skeleton :loading="loading" animated>
      <template #default>
        <div ref="chartRef" style="height: 300px; width: 100%"></div>
      </template>
    </el-skeleton>
  </el-card>
</template>

<script setup lang="ts">
  import { Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  const props = defineProps({
    loading: {
      type: Boolean,
    },
  });

  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  watch(() => props.loading, () => {
    setOptions({
      tooltip: {
        trigger: 'item',
      },

      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 500, name: '电子产品' },
            { value: 310, name: '服装' },
            { value: 274, name: '化妆品' },
            { value: 400, name: '家居' },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 400;
          },
        },
      ],
    });
  });
</script>

<style scoped></style>
