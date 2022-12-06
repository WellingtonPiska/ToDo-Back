import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerModel from '../controller/ModelController';
import schemaValidationModelCreate from '../validation/schemaValidationCreate';
import schemaValidationModelDelete from '../validation/schemaValidationDelete';
import schemaValidationModelFind from '../validation/schemaValidationFind';
import schemaValidationModelUpdate from '../validation/schemaValidationUpdate';

const controllerModel = new ControllerModel();
const routerModel = Router();

routerModel.get('/', controllerModel.list);
routerModel.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationModelFind),
  controllerModel.find
);
routerModel.post(
  '/',
  ensureValidationYupRequest(schemaValidationModelCreate),
  controllerModel.create
);
routerModel.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationModelUpdate),
  controllerModel.update
);
routerModel.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationModelDelete),
  controllerModel.delete
);

export default routerModel;
