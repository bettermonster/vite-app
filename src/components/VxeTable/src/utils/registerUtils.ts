/**
 * @description: 注册全部自定义渲染器
 * @return {*}
 */

import { VXETable } from 'vxe-table';
import { JVxeTypePrefix, JVxeTypes, JVxeRenderType } from '../types/JVxeTypes';
import { componentMap, defineComponent } from '../componentMap';
import { Component } from 'vue';

export function registerAllComponent() {
  defineComponent();
  // 遍历所有组件
  const components = [...componentMap.keys()];
  components.forEach((type) => {
    registerOneComponent(<JVxeTypes>type);
  });
}

/**
 * @description: 注册单个组件
 * @param {JVxeTypes} type
 * @return {*}
 */
function registerOneComponent(type: JVxeTypes) {
  const component = componentMap.get(type);
  if (component) {
    if (['select'].includes(type)) {
      createEditRender(type, component);
    } else {
      createCellRender(type, component);
    }
  } else {
    throw new Error(`【registerOneComponent】"${type}"不存在于componentMap中`);
  }
}

/**
 * @description: 注册普通组件
 * @return {*}
 */
function createCellRender(type: JVxeTypes, component: Component) {
  VXETable.renderer.add(JVxeTypePrefix + type, {
    renderDefault: createRender(type, component, JVxeRenderType.default),
  });
}

/** 注册可编辑组件 */
function createEditRender(type: JVxeTypes, component: Component) {
  // 获取当前组件的增强
  // 添加渲染
  VXETable.renderer.add(JVxeTypePrefix + type, {
    // 可编辑模板
    renderEdit: createRender(type, component, JVxeRenderType.editer),
    // 显示模板
    renderCell: createRender(type, componentMap.get(JVxeTypes.normal) as any, JVxeRenderType.spaner),
  });
}

/**
 * @description: 渲染dom
 * @return {*}
 */
function createRender(type: JVxeTypes, component: Component, renderType: JVxeRenderType) {
  return function (renderOptions: any, params: any) {
    return [
      h(component, {
        type: type,
        params: params,
        renderOptions: renderOptions,
        renderType: renderType,
      }),
    ];
  };
}
