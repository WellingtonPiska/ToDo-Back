import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import { Router } from 'express';

import ControllerCentroCusto from '../controller/CentroCustoController';
import schemaValidationCentroCustoFind from '../validation/schemaValidationFind';
import schemaValidationCentroCustoCreate from '../validation/schemaValidationCreate';
import schemaValidationCentroCustoUpdate from '../validation/schemaValidationUpdate';


const controllerCentroCusto = new ControllerCentroCusto();
const routerCentroCusto = Router();

routerCentroCusto.get('/', controllerCentroCusto.list);
routerCentroCusto.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationCentroCustoFind),
  controllerCentroCusto.find
);
routerCentroCusto.post(
  '/',
  ensureValidationYupRequest(schemaValidationCentroCustoCreate),
  controllerCentroCusto.create
);
routerCentroCusto.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationCentroCustoUpdate),
  controllerCentroCusto.update
);



export default routerCentroCusto;
