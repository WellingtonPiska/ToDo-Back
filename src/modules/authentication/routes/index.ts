import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import AuthenticationController from '../controller/AuthenticationController';
import schemaBodyAuthenticationLogin from '../validation/schemaValidationLogin';

const authenticationController = new AuthenticationController();

// login
const authenticateRoutes = Router();
authenticateRoutes.post(
  '/login',
  ensureValidationYupRequest(schemaBodyAuthenticationLogin),
  authenticationController.login
);

authenticateRoutes.post('/refreshToken', authenticationController.refreshToken);

export default authenticateRoutes;
