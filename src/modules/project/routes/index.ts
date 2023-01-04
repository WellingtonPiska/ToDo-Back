import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerProject from '../controller/ProjectController';
import schemaValidationProjectCreate from '../validation/schemaValidationCreate';
import schemaValidationProjectDelete from '../validation/schemaValidationDelete';
import schemaValidationProjectFind from '../validation/schemaValidationFind';
import schemaValidationProjectUpdate from '../validation/schemaValidationUpdate';

const controllerProject = new ControllerProject();
const routerProject = Router();

routerProject.get('/', controllerProject.list);
routerProject.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationProjectFind),
  controllerProject.find
);
routerProject.post(
  '/',
  ensureValidationYupRequest(schemaValidationProjectCreate),
  controllerProject.create
);
routerProject.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationProjectDelete),
  controllerProject.delete
);
routerProject.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationProjectUpdate),
  controllerProject.update
);

export default routerProject;
