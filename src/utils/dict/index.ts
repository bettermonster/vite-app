import { getAuthCache } from '../auth';
import { dictItemsApi } from '/@/api/sys/dict';
import { DB_DICT_DATA_KEY } from '/@/enums/cacheEnum';
// 从缓存获取字典配置
const getDictItemsByCode = (code: any) => {
  if (getAuthCache(DB_DICT_DATA_KEY) && getAuthCache(DB_DICT_DATA_KEY)[code]) {
    return getAuthCache(DB_DICT_DATA_KEY)[code];
  }
};

/**
 * @description: 获取字典数组
 * @return {*}
 */
export const initDictOptions = async (code: any) => {
  // 优先从缓存里读取字典配置
  if (getDictItemsByCode(code)) {
    return new Promise((resolve) => {
      resolve(getDictItemsByCode(code));
    });
  }
  //update-end-author:taoyan date:2022-6-21 for: 字典数据请求前将参数编码处理，但是不能直接编码，因为可能之前已经编码过了
  return dictItemsApi({ lookupCodes: code });
};
