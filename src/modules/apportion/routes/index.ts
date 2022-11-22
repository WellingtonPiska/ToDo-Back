import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerApportion from '../controller/ApportionController';
import schemaValidationApportionFind from '../validation/schemaValidationFind';

const controllerApportion = new ControllerApportion();
const routerApportion = Router();

routerApportion.get('/', controllerApportion.list)
routerApportion.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationApportionFind),
  controllerApportion.find
);
export default routerApportion;
