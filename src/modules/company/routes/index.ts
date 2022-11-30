import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerCompanyContact from '../controller/CompanyContactController';
import ControllerCompany from '../controller/CompanyController';
import schemaValidationCompanyContactList from '../validation/schemaValidationContactList';
import schemaValidationCompanyCreate from '../validation/schemaValidationCreate';
import schemaValidationCompanyContactCreate from '../validation/schemaValidationCreateContact';
import schemaValidationCompanyDelete from '../validation/schemaValidationDelete';
import schemaValidationCompanyFind from '../validation/schemaValidationFind';
import schemaValidationCompanyContactFind from '../validation/schemaValidationFindContact';
import schemaValidationCompanyUpdate from '../validation/schemaValidationUpdate';
import schemaValidationCompanyContactUpdate from '../validation/schemaValidationUpdateContact';

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
  ensureValidationYupRequest(schemaValidationCompanyContactList),
  controllerContact.list
);

routerCompany.get(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyContactFind),
  controllerContact.find
);
routerCompany.post(
  '/:company/contact/',
  ensureValidationYupRequest(schemaValidationCompanyContactCreate),
  controllerContact.create
);
routerCompany.delete(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyDelete),
  controllerContact.delete
);
routerCompany.put(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyContactUpdate),
  controllerContact.update
);

export default routerCompany;
