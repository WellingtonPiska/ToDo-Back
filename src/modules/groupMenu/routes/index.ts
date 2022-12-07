import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerGroupMenu from '../controller/GroupMenuController';
import schemaValidationGroupMenuCreate from '../validation/schemaValidationCreate';
import schemaValidationGroupMenuDelete from '../validation/schemaValidationDelete';
import schemaValidationGroupMenuFind from '../validation/schemaValidationFind';
import schemaValidationGroupMenuUpdate from '../validation/schemaValidationUpdate';

const controllerGroupMenu = new ControllerGroupMenu();
const routerGroupMenu = Router();

routerGroupMenu.get('/', controllerGroupMenu.list);
routerGroupMenu.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupMenuFind),
  controllerGroupMenu.find
);
routerGroupMenu.post(
  '/',
  ensureValidationYupRequest(schemaValidationGroupMenuCreate),
  controllerGroupMenu.create
);
routerGroupMenu.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupMenuUpdate),
  controllerGroupMenu.update
);
routerGroupMenu.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationGroupMenuDelete),
  controllerGroupMenu.delete
);

export default routerGroupMenu;
