import { Component } from 'vue';
import { JVxeTypes } from '../types';

import JVxeNormalCell from './components/cells/JVxeNormalCell.vue';
import JVxeSelectCell from './components/cells/JVxeSelectCell.vue';
import JVxeSlotCell from './components/cells/JVxeSlotCell';

const componentMap = new Map<JVxeTypes | string, Component>();

// 注册组件
export function addComponent(type: JVxeTypes, component: Component) {
  if (componentMap.has(type)) {
    throw new Error(`【addComponent】组件"${type}"已存在`);
  }
  componentMap.set(type, component);
}

// 定义内置自定义组件
export function defineComponent() {
  addComponent(JVxeTypes.normal, JVxeNormalCell);
  addComponent(JVxeTypes.select, JVxeSelectCell);
  addComponent(JVxeTypes.slot, JVxeSlotCell);
}

export { componentMap };
