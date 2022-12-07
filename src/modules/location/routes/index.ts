import { Router } from 'express';

import validationRequest from '../../../shared/middleware/validationRequest';
import ControllerCity from '../controller/CityController';
import ControllerState from '../controller/StateController';
import ZipCodeController from '../controller/ZipCodeController';
import schemaValidationState from '../validation/schemaValidationState';
import schemaValidationZipCode from '../validation/schemaValidationZipCode';

const controllerState = new ControllerState();
const controllerCity = new ControllerCity();
const controllerZipCode = new ZipCodeController();

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

routerLocation.get(
  '/cep/:cep',
  validationRequest(schemaValidationZipCode),
  controllerZipCode.find
);

export default routerLocation;
