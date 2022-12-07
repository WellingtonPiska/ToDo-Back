import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerRoutes from '../controller/RoutesController';
import schemaValidationRoutesCreate from '../validation/schemaValidationCreate';
import schemaValidationRoutesDelete from '../validation/schemaValidationDelete';
import schemaValidationRoutesFind from '../validation/schemaValidationFind';
import schemaValidationRoutesUpdate from '../validation/schemaValidationUpdate';

const controllerRoutes = new ControllerRoutes();
const routerRoutes = Router();

routerRoutes.get('/', controllerRoutes.list);
routerRoutes.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationRoutesFind),
  controllerRoutes.find
);
routerRoutes.post(
  '/',
  ensureValidationYupRequest(schemaValidationRoutesCreate),
  controllerRoutes.create
);
routerRoutes.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationRoutesUpdate),
  controllerRoutes.update
);
routerRoutes.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationRoutesDelete),
  controllerRoutes.delete
);

export default routerRoutes;
