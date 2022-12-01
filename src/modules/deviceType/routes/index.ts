import { Router } from 'express';
import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerDeviceType from '../controller/DeviceTypeController';
import schemaValidationDeviceTypeCreate from '../validation/schemaValidationCreate';
import schemaValidationDeviceTypeDelete from '../validation/schemaValidationDelete';
import schemaValidationDeviceTypeFind from '../validation/schemaValidationFind';
import schemaValidationDeviceTypeUpdate from '../validation/schemaValidationUpdate';

const controllerDeviceType = new ControllerDeviceType();
const routerDeviceType = Router();

routerDeviceType.get('/', controllerDeviceType.list);
routerDeviceType.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationDeviceTypeFind),
  controllerDeviceType.find
);
routerDeviceType.post(
  '/',
  ensureValidationYupRequest(schemaValidationDeviceTypeCreate),
  controllerDeviceType.create
);
routerDeviceType.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationDeviceTypeUpdate),
  controllerDeviceType.update
);
routerDeviceType.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationDeviceTypeDelete),
  controllerDeviceType.delete
);

export default routerDeviceType;
