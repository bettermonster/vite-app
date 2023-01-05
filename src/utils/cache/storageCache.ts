export interface CreateStorageParams {
  storage: Storage;
}

export const createStorge = ({ storage = sessionStorage }: CreateStorageParams) => {
  class webStorage {
    private storage: Storage;

    constructor() {
      this.storage = storage;
    }

    private getKey(key: string): string {
      return `${key}`.toUpperCase();
    }

    set(key: string, value: any) {
      const stringValue = JSON.stringify({
        value,
        time: Date.now(),
      });
      this.storage.setItem(this.getKey(key), stringValue);
    }
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;
      const data = JSON.parse(val);
      const { value } = data;
      return value;
    }
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }
    clear() {
      this.storage.clear();
    }
  }

  return new webStorage();
};
