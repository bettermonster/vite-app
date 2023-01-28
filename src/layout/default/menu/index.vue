<script lang="tsx">
  import AppLogo from '/@/components/Appliction/src/AppLogo.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { BasicMenu } from '/@/components/Menu/index';
  import { userPermissionStore } from '/@/store/modules/permission';
  import { ScrollContainer } from '/@/components/container';
  export default defineComponent({
    setup() {
      const go = useGo();

      const permissionStore = userPermissionStore();

      // 获取backMenuList
      const backMenuList = permissionStore.backMenuList;

      function handleMenuSelect(path: string) {
        go(path);
      }

      function renderHeader() {
        return <AppLogo />;
      }

      function renderMenu() {
        return <BasicMenu backMenuList={backMenuList} onMenuSelect={handleMenuSelect} />;
      }

      return () => {
        return (
          <>
            {renderHeader()}
            {<ScrollContainer style="height:calc(100% - 48px)">{() => renderMenu()}</ScrollContainer>}
          </>
        );
      };
    },
  });
</script>
