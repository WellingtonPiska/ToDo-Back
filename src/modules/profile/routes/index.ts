import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerProfile from '../controller/ProfileController';
import schemaValidationProfileCreate from '../validation/schemaValidationCreate';
import schemaValidationProfileDelete from '../validation/schemaValidationDelete';
import schemaValidationEditProfileStatus from '../validation/schemaValidationEditProfileStatus';
import schemaValidationProfileFind from '../validation/schemaValidationFind';
import schemaValidationProfileUpdate from '../validation/schemaValidationUpdate';

const controllerProfile = new ControllerProfile();
const routerProfile = Router();

routerProfile.get('/', controllerProfile.list);
routerProfile.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileFind),
  controllerProfile.find
);
routerProfile.post(
  '/',
  ensureValidationYupRequest(schemaValidationProfileCreate),
  controllerProfile.create
);

routerProfile.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileUpdate),
  controllerProfile.update
);
routerProfile.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationProfileDelete),
  controllerProfile.delete
);
routerProfile.put(
  '/editStatus/:id',
  ensureValidationYupRequest(schemaValidationEditProfileStatus),
  controllerProfile.editStatusProfile
);

export default routerProfile;
