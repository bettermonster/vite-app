import { defHttp } from '/@/utils/http/axios';
import backend from '/@/settings/project.server';

const Api = {
  getMyTodo: '/api' + backend.workflowService + '/api/bench/todo',
};

export function getMyTodo(params: any) {
  return defHttp.get({ url: Api.getMyTodo, params });
}
