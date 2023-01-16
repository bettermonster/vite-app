<script lang="tsx">
  import AppLogo from '/@/components/Appliction/src/AppLogo.vue';
  import { BasicMenu } from '/@/components/Menu/index';
  export default defineComponent({
    setup() {
      function renderHeader() {
        return <AppLogo />;
      }

      function renderMenu() {
        return <BasicMenu />;
      }

      // {<ScrollContainer style="height:48px">{() => renderMenu()}</ScrollContainer>}
      return () => {
        return (
          <>
            {renderHeader()}
            {renderMenu()}
          </>
        );
      };
    },
  });
</script>
