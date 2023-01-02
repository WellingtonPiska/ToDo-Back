import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import SectorController from '../controller/SectorController';
import schemaValidationSectorCreate from '../validation/schemaValidationCreate';
import schemaValidationSectorDelete from '../validation/schemaValidationDelete';
import schemaValidationEditSectorStatus from '../validation/schemaValidationEditSectorStatus';
import schemaValidationSectorFind from '../validation/schemaValidationFind';
import schemaValidationSectorUpdate from '../validation/schemaValidationUpdate';

const sectorController = new SectorController();
const routerSector = Router();

routerSector.get('/', sectorController.list);

routerSector.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectorFind),
  sectorController.find
);
routerSector.post(
  '/',
  ensureValidationYupRequest(schemaValidationSectorCreate),
  sectorController.create
);
routerSector.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectorDelete),
  sectorController.delete
);
routerSector.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationSectorUpdate),
  sectorController.update
);
routerSector.put(
  '/editStatus/:id',
  ensureValidationYupRequest(schemaValidationEditSectorStatus),
  sectorController.editStatusSector
);

export default routerSector;
