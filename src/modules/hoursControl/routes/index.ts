import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerHoursControl from '../controller/HoursControlController';
import schemaValidationHoursControlCreate from '../validation/schemaValidationCreate';
import schemaValidationHoursControlDelete from '../validation/schemaValidationDelete';
import schemaValidationHoursControlFind from '../validation/schemaValidationFind';
import schemaValidationHoursControlUpdate from '../validation/schemaValidationUpdate';

const controllerHoursControl = new ControllerHoursControl();
const routerHoursControl = Router();

routerHoursControl.get('/', controllerHoursControl.list);
routerHoursControl.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationHoursControlFind),
  controllerHoursControl.find
);
routerHoursControl.post(
  '/',
  ensureValidationYupRequest(schemaValidationHoursControlCreate),
  controllerHoursControl.create
);
routerHoursControl.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationHoursControlDelete),
  controllerHoursControl.delete
);
routerHoursControl.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationHoursControlUpdate),
  controllerHoursControl.update
);

export default routerHoursControl;
