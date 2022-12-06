import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerApportion from '../controller/ApportionController';
import schemaValidationApportionCreate from '../validation/schemaValidationCreate';
import schemaValidationApportionDelete from '../validation/schemaValidationDelete';
import schemaValidationApportionFind from '../validation/schemaValidationFind';
import schemaValidationApportionUpdate from '../validation/schemaValidationUpdate';

const controllerApportion = new ControllerApportion();
const routerApportion = Router();

routerApportion.get('/', controllerApportion.list);
routerApportion.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationApportionFind),
  controllerApportion.find
);
routerApportion.post(
  '/',
  ensureValidationYupRequest(schemaValidationApportionCreate),
  controllerApportion.create
);
routerApportion.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationApportionUpdate),
  controllerApportion.update
);
routerApportion.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationApportionDelete),
  controllerApportion.delete
);
export default routerApportion;
