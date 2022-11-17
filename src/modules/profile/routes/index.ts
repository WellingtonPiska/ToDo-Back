import ControllerProfile from '../controller/ProfileController';


import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import schemaValidationProfileCreate from '../validation/schemaValidationCreate';
import schemaValidationProfileDelete from '../validation/schemaValidationDelete';
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

export default routerProfile;
