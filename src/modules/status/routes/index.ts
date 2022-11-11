import { Router } from 'express';
//import ensureValidationYupRequest from '../../../middlewares/ensureValidationYupRequest';
import ControllerStatus from '../controller/StatusController';
import schemaValidationStatusCreate from '../validation/schemaValidationStatusCreate';
import schemaValidationStatusDelete from '../validation/schemaValidationStatusDelete';
import schemaValidationStatusFind from '../validation/schemaValidationStatusFind';
import schemaValidationStatusUpdate from '../validation/schemaValidationStatusUpdate';

const controllerStatus = new ControllerStatus();
const routerStatus = Router();

routerStatus.get('/', controllerStatus.list);
// routerStatus.get(
//   '/:id',
//   ensureValidationYupRequest(schemaValidationStatusFind),
//   controllerStatus.find
// );
// routerStatus.post(
//   '/',
//   ensureValidationYupRequest(schemaValidationStatusCreate),
//   controllerStatus.create
// );
// routerStatus.put(
//   '/:id',
//   ensureValidationYupRequest(schemaValidationStatusUpdate),
//   controllerStatus.update
// );
// routerStatus.delete(
//   '/:id',
//   ensureValidationYupRequest(schemaValidationStatusDelete),
//   controllerStatus.delete
// );

export default routerStatus;
