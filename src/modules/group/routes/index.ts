import ControllerGroup from '../controller/GroupController';

import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import schemaValidationGroupCreate from '../validation/schemaValidationCreate';
import schemaValidationGroupDelete from '../validation/schemaValidationDelete';
import schemaValidationGroupFind from '../validation/schemaValidationFind';
import schemaValidationGroupUpdate from '../validation/schemaValidationUpdate';

const controllerGroup = new ControllerGroup();
const routerGroup = Router();

routerGroup.get('/', controllerGroup.list);
routerGroup.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupFind),
  controllerGroup.find
);
routerGroup.post(
  '/',
  ensureValidationYupRequest(schemaValidationGroupCreate),
  controllerGroup.create
);
routerGroup.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupUpdate),
  controllerGroup.update
);
routerGroup.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupDelete),
  controllerGroup.delete
);

export default routerGroup;
