import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerProfileMenu from '../controller/ProfileMenuController';
import schemaValidationProfileMenuCreate from '../validation/schemaValidationCreate';
import schemaValidationProfileMenuDelete from '../validation/schemaValidationDelete';
import schemaValidationProfileMenuFind from '../validation/schemaValidationFind';
import schemaValidationProfileMenuUpdate from '../validation/schemaValidationUpdate';

const controllerProfileMenu = new ControllerProfileMenu();
const routerProfileMenu = Router();

routerProfileMenu.get('/', controllerProfileMenu.list);
routerProfileMenu.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileMenuFind),
  controllerProfileMenu.find
);
routerProfileMenu.post(
  '/',
  ensureValidationYupRequest(schemaValidationProfileMenuCreate),
  controllerProfileMenu.create
);
routerProfileMenu.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileMenuUpdate),
  controllerProfileMenu.update
);
routerProfileMenu.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileMenuDelete),
  controllerProfileMenu.delete
);

export default routerProfileMenu;
