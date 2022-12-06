import { Router } from 'express';

import validationRequest from '../../../shared/middleware/validationRequest';
import ControllerStatus from '../controller/StatusController';
import schemaValidationStatusCreate from '../validation/schemaValidationStatusCreate';
import schemaValidationStatusDelete from '../validation/schemaValidationStatusDelete';
import schemaValidationStatusFind from '../validation/schemaValidationStatusFind';
import schemaValidationStatusUpdate from '../validation/schemaValidationStatusUpdate';

const controllerStatus = new ControllerStatus();
const routerStatus = Router();

routerStatus.get('/', controllerStatus.list);

routerStatus.get(
  '/:id',
  validationRequest(schemaValidationStatusFind),
  controllerStatus.find
);

routerStatus.post(
  '/',
  validationRequest(schemaValidationStatusCreate),
  controllerStatus.create
);

routerStatus.put(
  '/:id',
  validationRequest(schemaValidationStatusUpdate),
  controllerStatus.update
);

routerStatus.delete(
  '/:id',
  validationRequest(schemaValidationStatusDelete),
  controllerStatus.delete
);

export default routerStatus;
