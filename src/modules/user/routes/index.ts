import { Router } from 'express';

import { uploadAvatar } from '../../../config/uploadAvatar';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerUser from '../controller/UserController';
import schemaValidationUserAvatar from '../validation/schemaValidationAvatar';
import schemaValidationUserCreate from '../validation/schemaValidationUserCreate';
import schemaValidationUserDelete from '../validation/schemaValidationUserDelete';
import schemaValidationUserFind from '../validation/schemaValidationUserFind';
import schemaValidationUserUpdate from '../validation/schemaValidationUserUpdate';

const controllerUser = new ControllerUser();
const routerUser = Router();

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
routerUser.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserUpdate),
  controllerUser.update
);

routerUser.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationUserDelete),
  controllerUser.delete
);

export default routerUser;
