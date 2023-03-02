import { useJVxeCompProps, useJVxeComponent } from '../../hooks/useJVxeComponent';

export default defineComponent({
  name: 'JVxeSlotCell',
  props: useJVxeCompProps(),
  setup(props) {
    return () => {
      const data = useJVxeComponent(props);
      const { slot } = props.renderOptions;
      // console.log(props);
      const slotProps = computed(() => {
        return {
          value: data.innerValue.value,
          row: data.row.value,
          column: data.column.value,
          params: props.params,
          $table: props.params.$table,
          rowId: props.params.rowid,
          index: props.params.rowIndex,
          rowIndex: props.params.rowIndex,
          columnIndex: props.params.columnIndex,
        };
      });
      //   console.log(props);
      if (slot) {
        return h('div', {}, slot(slotProps.value));
      } else {
        return h('div');
      }
    };
  },
});
