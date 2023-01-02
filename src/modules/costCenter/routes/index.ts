import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerCostCenter from '../controller/CostCenterController';
import schemaValidationCostCenterCreate from '../validation/schemaValidationCreate';
import schemaValidationCostCenterDelete from '../validation/schemaValidationDelete';
import schemaValidationEditCostCenterStatus from '../validation/schemaValidationEditCostCenterStatus';
import schemaValidationCostCenterFind from '../validation/schemaValidationFind';
import schemaValidationCostCenterUpdate from '../validation/schemaValidationUpdate';

const controllerCostCenter = new ControllerCostCenter();
const routerCostCenter = Router();

routerCostCenter.get('/', controllerCostCenter.list);
routerCostCenter.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationCostCenterFind),
  controllerCostCenter.find
);
routerCostCenter.post(
  '/',
  ensureValidationYupRequest(schemaValidationCostCenterCreate),
  controllerCostCenter.create
);
routerCostCenter.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationCostCenterUpdate),
  controllerCostCenter.update
);
routerCostCenter.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationCostCenterDelete),
  controllerCostCenter.delete
);
routerCostCenter.put(
  '/editStatus/:id',
  ensureValidationYupRequest(schemaValidationEditCostCenterStatus),
  controllerCostCenter.editStatusCostCenter
);

export default routerCostCenter;
