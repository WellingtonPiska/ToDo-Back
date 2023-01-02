import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerGroup from '../controller/GroupController';
import schemaValidationGroupCreate from '../validation/schemaValidationCreate';
import schemaValidationGroupDelete from '../validation/schemaValidationDelete';
import schemaValidationEditGroupStatus from '../validation/schemaValidationEditGroupStatus';
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
routerGroup.put(
  '/editStatus/:id',
  ensureValidationYupRequest(schemaValidationEditGroupStatus),
  controllerGroup.editStatusGroup
);

export default routerGroup;
