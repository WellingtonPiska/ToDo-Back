import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerForm from '../controller/FormController';
import schemaValidationFormCreate from '../validation/schemaValidationCreate';
import schemaValidationFormDelete from '../validation/schemaValidationDelete';
import schemaValidationFormFind from '../validation/schemaValidationFind';
import schemaValidationFormUpdate from '../validation/schemaValidationUpdate';

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
routerForm.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationFormDelete),
  controllerForm.delete
);
routerForm.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationFormUpdate),
  controllerForm.update
);

export default routerForm;
