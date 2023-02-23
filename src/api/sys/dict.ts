import { defHttp } from '/@/utils/http/axios';
import backend from '/@/settings/project.server';

const Api = {
  dictItemsApi: '/api' + backend.appCommonService + '/api/adminsmlookupitem/weblist',
};

export function dictItemsApi(params: any) {
  return defHttp.get({
    url: Api.dictItemsApi,
    params,
  });
}
