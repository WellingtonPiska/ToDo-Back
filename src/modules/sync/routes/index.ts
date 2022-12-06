import { Router } from 'express';

import ControllerSync from '../controller/SyncController';

const controllerSync = new ControllerSync();

const routerSync = Router();

routerSync.get('/location', controllerSync.location);
routerSync.get('/sector', controllerSync.sector);
routerSync.get('/user', controllerSync.user);

export default routerSync;
