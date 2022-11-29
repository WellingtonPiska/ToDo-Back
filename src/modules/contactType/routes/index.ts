import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerContactType from '../controller/ContactTypeController';
import schemaValidationContactTypeCreate from '../validation/schemaValidationCreate';
import schemaValidationContactTypeDelete from '../validation/schemaValidationDelete';
import schemaValidationContactTypeFind from '../validation/schemaValidationFind';
import schemaValidationContactTypeUpdate from '../validation/schemaValidationUpdate';

const controllerContactType = new ControllerContactType();
const routerContactType = Router();

routerContactType.get('/', controllerContactType.list);
routerContactType.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationContactTypeFind),
  controllerContactType.find
);
routerContactType.post(
  '/',
  ensureValidationYupRequest(schemaValidationContactTypeCreate),
  controllerContactType.create
);
routerContactType.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationContactTypeUpdate),
  controllerContactType.update
);
routerContactType.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationContactTypeDelete),
  controllerContactType.delete
);

export default routerContactType;
