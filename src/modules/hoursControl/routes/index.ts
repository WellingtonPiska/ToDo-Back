import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerHoursControl from '../controller/HoursControlController';
import schemaValidationHoursControlCreate from '../validation/schemaValidationCreate';
import schemaValidationHoursControlDelete from '../validation/schemaValidationDelete';
import schemaValidationHoursControlFind from '../validation/schemaValidationFind';
import schemaValidationHoursControlUpdate from '../validation/schemaValidationUpdate';

const controllerHoursControl = new ControllerHoursControl();
const routerHoursControl = Router();

routerHoursControl.get('/:project/hoursControl/', controllerHoursControl.list);
routerHoursControl.get(
  '/:project/hoursControl/:id',
  ensureValidationYupRequest(schemaValidationHoursControlFind),
  controllerHoursControl.find
);
routerHoursControl.post(
  '/:project/hoursControl/',
  ensureValidationYupRequest(schemaValidationHoursControlCreate),
  controllerHoursControl.create
);
routerHoursControl.delete(
  '/:project/hoursControl/:id',
  ensureValidationYupRequest(schemaValidationHoursControlDelete),
  controllerHoursControl.delete
);
routerHoursControl.put(
  '/:project/hoursControl/:id',
  ensureValidationYupRequest(schemaValidationHoursControlUpdate),
  controllerHoursControl.update
);

export default routerHoursControl;
