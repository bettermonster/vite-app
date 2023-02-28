import { JVxeRenderType } from '../types/JVxeTypes';
import { isPromise } from '/@/utils/is';
import { propTypes } from '/@/utils/propTypes';
import { filterDictText } from '/@/utils/dict/JDictSelectUtil';

export function useJVxeCompProps() {
  return {
    // 组件类型
    type: propTypes.string,
    // 渲染类型
    renderType: propTypes.string.def('default'),
    // 渲染参数
    params: propTypes.object,
    // 渲染自定义选项
    renderOptions: propTypes.object,
  };
}

export function useJVxeComponent(props: any) {
  // console.log(props);
  const value = computed(() => props.params.row[props.params.column.property]);
  const innerValue = ref(value.value);
  const row = computed(() => props.params.row);
  const column = computed(() => props.params.column);

  const context = {
    innerValue,
    row,
    column,
  };
  const ctx = { props, context };

  watch(
    value,
    (newValue) => {
      if (props.renderType === JVxeRenderType.spaner) {
        // 翻译
        const res = translate(newValue, ctx);
        if (isPromise(res)) {
          res.then((v) => (innerValue.value = v));
        } else {
          innerValue.value = res;
        }
      }
    },
    { immediate: true },
  );

  return {
    ...context,
  };
}

function translate(value: any, ctx: any) {
  // 默认翻译方法
  if (ctx) {
    return filterDictText(unref(ctx.context.column).params.options, value);
  } else {
    return value;
  }
}
