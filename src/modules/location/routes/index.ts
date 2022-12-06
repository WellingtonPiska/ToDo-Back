import { Router } from 'express';

import validationRequest from '../../../shared/middleware/validationRequest';
import ControllerCity from '../controller/CityController';
import ControllerState from '../controller/StateController';
import schemaValidationState from '../validation/schemaValidationState';

const controllerState = new ControllerState();
const controllerCity = new ControllerCity();

const routerLocation = Router();

routerLocation.get('/state', controllerState.list);
routerLocation.get(
  '/state/:uf',
  validationRequest(schemaValidationState),
  controllerState.find
);
routerLocation.get(
  '/city/:uf',
  validationRequest(schemaValidationState),
  controllerCity.list
);

export default routerLocation;
