import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerMenuRoutes from '../controller/MenuRoutesController';
import schemaValidationMenuRoutesCreate from '../validation/schemaValidationCreate';
import schemaValidationMenuRoutesDelete from '../validation/schemaValidationDelete';
import schemaValidationMenuRoutesFind from '../validation/schemaValidationFind';
import schemaValidationMenuRoutesUpdate from '../validation/schemaValidationUpdate';

const controllerMenuRoutes = new ControllerMenuRoutes();
const routerMenuRoutes = Router();

routerMenuRoutes.get('/', controllerMenuRoutes.list);
routerMenuRoutes.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuRoutesFind),
  controllerMenuRoutes.find
);
routerMenuRoutes.post(
  '/',
  ensureValidationYupRequest(schemaValidationMenuRoutesCreate),
  controllerMenuRoutes.create
);
routerMenuRoutes.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuRoutesUpdate),
  controllerMenuRoutes.update
);
routerMenuRoutes.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationMenuRoutesDelete),
  controllerMenuRoutes.delete
);

export default routerMenuRoutes;
