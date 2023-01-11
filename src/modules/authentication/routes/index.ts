import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import AuthenticationController from '../controller/AuthenticationController';
import schemaValidationAuthenticationCreate from '../validation/schemaValidationCreate';
import schemaValidationAuthenticationDelete from '../validation/schemaValidationDelete';
import schemaValidationAuthenticationFind from '../validation/schemaValidationFind';
import schemaBodyAuthenticationLogin from '../validation/schemaValidationLogin';
import schemaValidationAuthenticationUpdate from '../validation/schemaValidationUpdate';

const authenticationController = new AuthenticationController();
const authenticationRoutes = Router();

authenticationRoutes.get('/', authenticationController.list);
authenticationRoutes.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationAuthenticationFind),
  authenticationController.find
);
authenticationRoutes.post(
  '/',
  ensureValidationYupRequest(schemaValidationAuthenticationCreate),
  authenticationController.create
);
authenticationRoutes.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationAuthenticationDelete),
  authenticationController.delete
);
authenticationRoutes.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationAuthenticationUpdate),
  authenticationController.update
);

// login
const loginRoutes = Router();
loginRoutes.post(
  '/',
  ensureValidationYupRequest(schemaBodyAuthenticationLogin),
  authenticationController.login
);

export { authenticationRoutes, loginRoutes };
