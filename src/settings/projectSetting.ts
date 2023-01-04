import type { ProjectConfig } from '/#/config';
import { SessionTimeoutProcessingEnum } from '/@/enums/appEnum';
const setting: ProjectConfig = {
  // Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
};

export default setting;
