import { defHttp } from '/@/utils/http/axios';
import { LoginParams } from './model/userModel';
import backend from '/@/settings/project.server';

import { ErrorMessageMode } from '/#/axios';

const Api = {
  login: '/api' + backend.uaaService + '/oauth/token',
};

export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  defHttp.post(
    {
      url: Api.login,
      params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: 'Basic d2ViX2FwcDo=',
      },
    },
    {
      errorMessageMode: mode,
    },
  );
  return Api.login;
}
