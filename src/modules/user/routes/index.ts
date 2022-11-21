import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import schemaValidationStatusDelete from '../../status/validation/schemaValidationStatusDelete';
import ControllerUser from '../controller/UserController';
import schemaValidationUserCreate from '../validation/schemaValidationUserCreate';
import schemaValidationUserFind from '../validation/schemaValidationUserFind';
import schemaValidationUserUpdate from '../validation/schemaValidationUserUpdate';

const controllerUser = new ControllerUser();
const routerUser = Router();

routerUser.get('/', controllerUser.list);
routerUser.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserFind),
  controllerUser.find
);
routerUser.post(
  '/',
  ensureValidationYupRequest(schemaValidationUserCreate),
  controllerUser.create
);
routerUser.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserUpdate),
  controllerUser.update
);

routerUser.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationStatusDelete),
  controllerUser.delete
);


export default routerUser;
