import { VxeTableProps } from '../types/index';
import { VxeTableInstance, VxeTablePrivateMethods } from 'vxe-table';

export function useMethods(props: VxeTableProps, { emit }: any, refs: any) {
  let xTableTemp: VxeTableInstance & VxeTablePrivateMethods;

  function getXTable() {
    if (!xTableTemp) {
      // !. 为 typescript 的非空断言
      xTableTemp = refs.gridRef.value!.getRefMaps().refTable.value;
    }
    return xTableTemp;
  }

  function beforeEditMethod({ row, rowIndex, column, columnIndex }) {
    return false;
  }

  // noinspection JSUnusedGlobalSymbols
  const hookMethods = {
    getXTable,
    beforeEditMethod,
  };

  // 可显式供外部调用的方法
  const publicMethods = {
    ...hookMethods,
  };

  // 事件触发绑定
  function trigger(name: string, event: any = {}) {
    // console.log('trigger');
    // console.log(event);
    emit(name, event);
  }

  return {
    methods: {
      trigger,
      ...publicMethods,
    },
  };
}
