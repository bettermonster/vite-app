export interface Menu {
  name: string;
  icon?: string;
  path: string;
  disabled?: boolean;
  children?: Menu[];
}
