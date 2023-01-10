import { Component } from 'vue';
import type { RouteMeta, RouteRecordRaw } from 'vue-router';

export interface Menu {
  name: string;
  icon?: string;
  path: string;
  disabled?: boolean;
  children?: Menu[];
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  component?: Component | string;
  children?: AppRouteRecordRaw[];
  meta: RouteMeta;
}
