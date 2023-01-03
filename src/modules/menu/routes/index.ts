import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerMenu from '../controller/MenuController';
import schemaValidationMenuCreate from '../validation/schemaValidationCreate';
import schemaValidationMenuDelete from '../validation/schemaValidationDelete';
import schemaValidationEditMenuStatus from '../validation/schemaValidationEditMenuStatus';
import schemaValidationMenuFind from '../validation/schemaValidationFind';
import schemaValidationMenuUpdate from '../validation/schemaValidationUpdate';

const controllerMenu = new ControllerMenu();
const routerMenu = Router();

routerMenu.get('/', controllerMenu.list);
routerMenu.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuFind),
  controllerMenu.find
);
routerMenu.post(
  '/',
  ensureValidationYupRequest(schemaValidationMenuCreate),
  controllerMenu.create
);
routerMenu.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuUpdate),
  controllerMenu.update
);
routerMenu.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuDelete),
  controllerMenu.delete
);
routerMenu.put(
  '/editStatus/:id',
  ensureValidationYupRequest(schemaValidationEditMenuStatus),
  controllerMenu.editStatusMenu
);

export default routerMenu;
