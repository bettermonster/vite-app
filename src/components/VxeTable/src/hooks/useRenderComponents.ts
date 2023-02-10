import { usePagination } from './usePagination';
import { VxeDataProps, VxeTableProps } from '../types/index';

export function useRenderComponents(props: VxeTableProps, data: VxeDataProps,methods) {
  const { renderPagination } = usePagination(props,methods);

  return {
    renderPagination,
  };
}
