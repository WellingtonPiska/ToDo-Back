import { Router } from 'express';
import ControllerSync from '../controller/SyncController';

const controllerSync = new ControllerSync();

const routerSync = Router();

routerSync.get('/sector', controllerSync.sector);

export default routerSync;
