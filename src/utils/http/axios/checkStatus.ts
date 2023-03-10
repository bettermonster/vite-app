import type { ErrorMessageMode } from '/#/axios';
import { useMessage } from '/@/hooks/web/useMessage';
import projectSetting from '/@/settings/projectSetting';
import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';
import { useUserStore } from '/@/store/modules/user';

const { createMessage, createErrorModal } = useMessage();
const error = createMessage.error!;
const stp = projectSetting.sessionTimeoutProcessing;

export function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = 'message'): void {
  const userStore = useUserStore();
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    // 401: Not logged in
    // Jump to the login page if not logged in, and carry the path of the current page
    // Return to the current page after successful login. This step needs to be operated on the login page.
    case 401:
      // userStore.setToken(undefined);
      errMessage = msg || '失败401';
      if (stp === SessionTimeoutProcessingEnum.PAGE_COVERAGE) {
        userStore.setSessionTimeout(true);
        console.log(errMessage)
      } else {
        userStore.logout();
        console.log(errMessage)
      }
      break;
    case 403:
      errMessage = '失败403';
      break;
    // 404请求不存在
    case 404:
      errMessage = '失败404';
      break;
    case 405:
      errMessage = '失败405';
      break;
    case 408:
      errMessage = '失败408';
      break;
    case 500:
      errMessage = '失败500';
      break;
    case 501:
      errMessage = '失败501';
      break;
    case 502:
      errMessage = '失败502';
      break;
    case 503:
      errMessage = '失败503';
      break;
    case 504:
      errMessage = '失败504';
      break;
    case 505:
      errMessage = '失败505';
      break;
    default:
  }

  if (errMessage) {
    if (errorMessageMode === 'modal') {
      createErrorModal({ title: '错误', content: errMessage });
    } else if (errorMessageMode === 'message') {
      error({ content: errMessage, key: `global_error_message_status_${status}` });
    }
  }
}
