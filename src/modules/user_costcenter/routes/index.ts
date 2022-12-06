import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerUserCostCenter from '../controller/UserCostCenterController';
import schemaValidationUserCostCenterCreate from '../validation/schemaValidationUserCostCenterCreate';
import schemaValidationUserCostCenterDelete from '../validation/schemaValidationUserCostCenterDelete';
import schemaValidationUserCostCenterFind from '../validation/schemaValidationUserCostCenterFind';
import schemaValidationUserCostCenterUpdate from '../validation/schemaValidationUserCostCenterUpdate';

const controllerUserCostCenter = new ControllerUserCostCenter();
const routerUserCostCenter = Router();

routerUserCostCenter.get('/', controllerUserCostCenter.list);
routerUserCostCenter.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserCostCenterFind),
  controllerUserCostCenter.find
);
routerUserCostCenter.post(
  '/',
  ensureValidationYupRequest(schemaValidationUserCostCenterCreate),
  controllerUserCostCenter.create
);
routerUserCostCenter.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserCostCenterUpdate),
  controllerUserCostCenter.update
);
routerUserCostCenter.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserCostCenterDelete),
  controllerUserCostCenter.delete
);

export default routerUserCostCenter;
