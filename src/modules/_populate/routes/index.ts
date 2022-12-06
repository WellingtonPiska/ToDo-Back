import { Router } from 'express';
import PopulateController from '../controller/PopulateController';

const controllerPopulate = new PopulateController();

const routerPopulate = Router();

routerPopulate.get('/', controllerPopulate.populate);

export default routerPopulate;
