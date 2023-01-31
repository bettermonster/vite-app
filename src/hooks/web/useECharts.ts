import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
import { Ref } from 'vue';

export function useECharts(elRef: Ref<HTMLDivElement>, theme: 'light' | 'dark' | 'default' = 'default') {
  const getDarkMode = computed(() => {
    return theme === 'default' ? theme : theme;
  });

  let chartInstance: echarts.ECharts | null = null;
  //   let resizeFn: Fn = resize;
  const cacheOptions = ref({} as Ref<EChartsOption>);

  function initCharts(t = theme) {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }
    chartInstance = echarts.init(el, t);
    // 之后要监听windows的窗口大小变化随时resize
  }

  function setOptions(options: EChartsOption, clear = true) {
    cacheOptions.value = options;
    nextTick(() => {
      console.log(unref(elRef));
      if (!chartInstance) {
        initCharts(getDarkMode.value as 'default');

        if (!chartInstance) return;
      }
      clear && chartInstance?.clear();
      chartInstance?.setOption(cacheOptions.value);
    });
  }

  //   主要用于菜单配置监听
  watch(getDarkMode, (theme) => {
    console.log(theme);
  });

  return {
    setOptions,
  };
}
