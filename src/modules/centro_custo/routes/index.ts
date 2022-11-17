import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';

import ControllerCentroCusto from '../controller/CentroCustoController';
import schemaValidationCentroCustoCreate from '../validation/schemaValidationCreate';
import schemaValidationCentroCustoDelete from '../validation/schemaValidationDelete';
import schemaValidationCentroCustoFind from '../validation/schemaValidationFind';
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
routerCentroCusto.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationCentroCustoDelete),
  controllerCentroCusto.delete
);


export default routerCentroCusto;
