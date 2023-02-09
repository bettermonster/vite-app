import { usePagination } from './usePagination';
import { VxeDataProps, VxeTableProps } from '../types/index';

export function useRenderComponents(props: VxeTableProps, data: VxeDataProps) {
  const { renderPagination } = usePagination(props);

  return {
    renderPagination,
  };
}
