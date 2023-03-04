<template>
  <div :class="prefixCls" class="px-4">
    <div>
      <el-tabs
        v-model="activeTabsValue"
        tab-position="bottom"
        :stretch="true"
        @tab-change="handleChange"
        @tab-remove="handleRemove"
      >
        <el-tab-pane
          v-for="item in getTabsState"
          :key="item.name"
          :name="item.path"
          :closable="item.meta?.affix ? false : true"
        >
          <template #label>
            <div :class="`${prefixCls}__info`">
              {{ item.meta.title }}
            </div>
          </template>
        </el-tab-pane>
      </el-tabs>
    </div>
    <span class="px-4 flex-shrink-0">123123</span>
  </div>
</template>

<script setup lang="ts">
  import { RouteMeta, useRouter } from 'vue-router';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { useGo } from '/@/hooks/web/usePage';
  const { prefixCls } = useDesign('header-multipleTabs');

  const router = useRouter();
  const tabStore = useMultipleTabStore();
  const go = useGo();

  const activeTabsValue = ref();
  const getTabsState = computed(() => {
    console.log(tabStore.getTabList);
    return tabStore.getTabList;
  });

  function handleChange(name: string) {
    console.log(name);
    go(name);
  }

  function handleRemove(name: string) {
    console.log(name);
    tabStore.closeTabByKey(name, router);
  }

  // 监听router的变化然后更改tab
  listenerRouteChange((route) => {
    const { name } = route;
    console.log(route);
    console.log(name);
    const { path, fullPath, meta = {} } = route;
    const { currentActiveMenu, hideTab } = meta as RouteMeta;
    const isHide = !hideTab ? null : currentActiveMenu;
    const p = isHide || fullPath || path;
    if (activeTabsValue.value !== p) {
      activeTabsValue.value = p as string;
    }

    tabStore.addTab(unref(route));
  });
</script>

<style lang="less">
  @import './index.less';
</style>
