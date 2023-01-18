<script lang="tsx">
  import AppLogo from '/@/components/Appliction/src/AppLogo.vue';
  import { BasicMenu } from '/@/components/Menu/index';
  import { userPermissionStore } from '/@/store/modules/permission';
  import { ScrollContainer } from '/@/components/container';
  export default defineComponent({
    setup() {
      const permissionStore = userPermissionStore();

      // 获取backMenuList
      const backMenuList = permissionStore.backMenuList;

      function renderHeader() {
        return <AppLogo />;
      }

      function renderMenu() {
        return <BasicMenu backMenuList={backMenuList} />;
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
