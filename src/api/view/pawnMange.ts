import { defHttp } from '/@/utils/http/axios';
import backend from '/@/settings/project.server';

const Api = {
  getGodsInfoList: '/api' + backend.pacService + '/api/godsInfo/q/godsInfo/list',
};

export function getGodsInfoList(params: any) {
  return defHttp.get({ url: Api.getGodsInfoList, requestOptions: {}, params });
}
