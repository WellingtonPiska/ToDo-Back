import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerUserSector from '../controller/UserSectorController';
import schemaValidationUserSectorCreate from '../validation/schemaValidationUserSectorCreate';
import schemaValidationUserSectorDelete from '../validation/schemaValidationUserSectorDelete';
import schemaValidationUserSectorFind from '../validation/schemaValidationUserSectorFind';
import schemaValidationUserSectorUpdate from '../validation/schemaValidationUserSectorUpdate';

const controllerUserSector = new ControllerUserSector();
const routerUserSector = Router();

routerUserSector.get('/', controllerUserSector.list);
routerUserSector.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserSectorFind),
  controllerUserSector.find
);
routerUserSector.post(
  '/',
  ensureValidationYupRequest(schemaValidationUserSectorCreate),
  controllerUserSector.create
);
routerUserSector.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserSectorUpdate),
  controllerUserSector.update
);
routerUserSector.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserSectorDelete),
  controllerUserSector.delete
);

export default routerUserSector;
