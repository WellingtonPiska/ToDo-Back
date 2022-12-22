import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import AuthenticationController from '../controller/AuthenticationController';
import schemaValidationLogin from '../validation/schemaValidationLogin';

const controllerAuth = new AuthenticationController();

const routerAuth = Router();

routerAuth.post(
  '/login',
  ensureValidationYupRequest(schemaValidationLogin),
  controllerAuth.login
);

export default routerAuth;
