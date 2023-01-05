import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerSections from '../controller/SectionsController';
import schemaValidationSectionsCreate from '../validation/schemaValidationCreate';
import schemaValidationSectionsDelete from '../validation/schemaValidationDelete';
import schemaValidationSectionsFind from '../validation/schemaValidationFind';
import schemaValidationSectionsUpdate from '../validation/schemaValidationUpdate';

const controllerSections = new ControllerSections();
const routerSections = Router();

routerSections.get('/', controllerSections.list);
routerSections.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectionsFind),
  controllerSections.find
);
routerSections.post(
  '/',
  ensureValidationYupRequest(schemaValidationSectionsCreate),
  controllerSections.create
);
routerSections.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectionsDelete),
  controllerSections.delete
);
routerSections.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectionsUpdate),
  controllerSections.update
);

export default routerSections;
