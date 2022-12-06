import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerCompany from '../controller/CompanyController';
import schemaValidationCompanyCreate from '../validation/schemaValidationCreate';
import schemaValidationCompanyDelete from '../validation/schemaValidationDelete';
import schemaValidationCompanyFind from '../validation/schemaValidationFind';
import schemaValidationCompanyUpdate from '../validation/schemaValidationUpdate';

const controllerCompany = new ControllerCompany();

const routerCompany = Router();

routerCompany.get('/', controllerCompany.list);
routerCompany.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationCompanyFind),
  controllerCompany.find
);
routerCompany.post(
  '/',
  ensureValidationYupRequest(schemaValidationCompanyCreate),
  controllerCompany.create
);
routerCompany.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationCompanyUpdate),
  controllerCompany.update
);
routerCompany.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationCompanyDelete),
  controllerCompany.delete
);

export default routerCompany;
