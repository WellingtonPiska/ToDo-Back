import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerForm from '../controller/FormController';
import schemaValidationFormCreate from '../validation/schemaValidationCreate';
import schemaValidationFormFind from '../validation/schemaValidationFind';

const controllerForm = new ControllerForm();
const routerForm = Router();

routerForm.get('/', controllerForm.list);
routerForm.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationFormFind),
  controllerForm.find
);
routerForm.post(
  '/',
  ensureValidationYupRequest(schemaValidationFormCreate),
  controllerForm.create
);

export default routerForm;
