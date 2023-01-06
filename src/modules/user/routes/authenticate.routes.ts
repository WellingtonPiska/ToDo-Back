import { Router } from 'express';

import ControllerUser from '../controller/UserController';

const controllerUser = new ControllerUser();
const authenticateRoutes = Router();

authenticateRoutes.post('/sessions', controllerUser.handle);

export { authenticateRoutes };
