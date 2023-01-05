import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerSections from '../controller/SectionsController';
import schemaValidationSectionsCreate from '../validation/schemaValidationCreate';
import schemaValidationSectionsDelete from '../validation/schemaValidationDelete';
import schemaValidationSectionsFind from '../validation/schemaValidationFind';
import schemaValidationSectionsUpdate from '../validation/schemaValidationUpdate';

const controllerSections = new ControllerSections();
const routerSections = Router();

routerSections.get('/:project/sections/', controllerSections.list);
routerSections.get(
  '/:project/sections/:id',
  ensureValidationYupRequest(schemaValidationSectionsFind),
  controllerSections.find
);
routerSections.post(
  '/:project/sections/',
  ensureValidationYupRequest(schemaValidationSectionsCreate),
  controllerSections.create
);
routerSections.delete(
  '/:project/sections/:id',
  ensureValidationYupRequest(schemaValidationSectionsDelete),
  controllerSections.delete
);
routerSections.put(
  '/:project/sections/:id',
  ensureValidationYupRequest(schemaValidationSectionsUpdate),
  controllerSections.update
);

export default routerSections;
