import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerCompanyContact from '../controller/CompanyContactController';

import schemaValidationCompanyContactList from '../validation/schemaValidationContactList';
import schemaValidationCompanyContactCreate from '../validation/schemaValidationCreateContact';
import schemaValidationCompanyContactDelete from '../validation/schemaValidationDeleteContact';
import schemaValidationCompanyContactFind from '../validation/schemaValidationFindContact';
import schemaValidationCompanyContactUpdate from '../validation/schemaValidationUpdateContact';

const controllerCompanyContact = new ControllerCompanyContact();
const routerCompanyContact = Router();

routerCompanyContact.get(
  '/:company/contact',
  ensureValidationYupRequest(schemaValidationCompanyContactList),
  controllerCompanyContact.list
);

routerCompanyContact.get(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyContactFind),
  controllerCompanyContact.find
);
routerCompanyContact.post(
  '/:company/contact/',
  ensureValidationYupRequest(schemaValidationCompanyContactCreate),
  controllerCompanyContact.create
);
routerCompanyContact.delete(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyContactDelete),
  controllerCompanyContact.delete
);
routerCompanyContact.put(
  '/:company/contact/:id',
  ensureValidationYupRequest(schemaValidationCompanyContactUpdate),
  controllerCompanyContact.update
);

export default routerCompanyContact;
