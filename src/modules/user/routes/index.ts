import { Router } from 'express';

import { uploadAvatar } from '../../../config/uploadAvatar';
import { ensureAuthenticated } from '../../../shared/middleware/ensureAuthenticated';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerUser from '../controller/UserController';
import schemaValidationUserAvatar from '../validation/schemaValidationAvatar';
import schemaValidationUserCreate from '../validation/schemaValidationCreate';
import schemaValidationUserDelete from '../validation/schemaValidationDelete';
import schemaValidationUserFind from '../validation/schemaValidationFind';
import schemaValidationUserUpdate from '../validation/schemaValidationUpdate';

const controllerUser = new ControllerUser();
const routerUser = Router();

routerUser.use(ensureAuthenticated);
routerUser.put(
  '/avatar/:id',
  uploadAvatar.single('file'),
  ensureValidationYupRequest(schemaValidationUserAvatar),
  controllerUser.avatar
);
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
routerUser.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserDelete),
  controllerUser.delete
);
routerUser.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserUpdate),
  controllerUser.update
);

export default routerUser;
