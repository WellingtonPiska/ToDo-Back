import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerCompany from '../controller/CompanyController';
import ControllerCompanyContact from '../controller/CompanyContactController';
import schemaValidationCompanyCreate from '../validation/schemaValidationCreate';
import schemaValidationCompanyDelete from '../validation/schemaValidationDelete';
import schemaValidationCompanyFind from '../validation/schemaValidationFind';
import schemaValidationCompanyUpdate from '../validation/schemaValidationUpdate';
import validContactList from '../validation/validContactList';
import validContactFind from '../validation/validContactFind';

const controllerCompany = new ControllerCompany();
const controllerContact = new ControllerCompanyContact();
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
routerCompany.get(
  '/:company/contact',
  ensureValidationYupRequest(validContactList),
  controllerContact.list
);

routerCompany.get(
  '/:company/contact/:id',
  ensureValidationYupRequest(validContactFind),
  controllerContact.find
);

export default routerCompany;
