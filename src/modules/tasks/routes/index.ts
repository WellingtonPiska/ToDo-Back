import { Router } from 'express';

import ensureValidationYupRequest from '../../../shared/middleware/validationRequest';
import ControllerTasks from '../controller/TasksController';
import schemaValidationTasksCreate from '../validation/schemaValidationCreate';
import schemaValidationTasksDelete from '../validation/schemaValidationDelete';
import schemaValidationTasksFind from '../validation/schemaValidationFind';
import schemaValidationTasksUpdate from '../validation/schemaValidationUpdate';

const controllerTasks = new ControllerTasks();
const routerTasks = Router();

routerTasks.get('/', controllerTasks.list);
routerTasks.get(
  '/:id',
  ensureValidationYupRequest(schemaValidationTasksFind),
  controllerTasks.find
);
routerTasks.post(
  '/',
  ensureValidationYupRequest(schemaValidationTasksCreate),
  controllerTasks.create
);
routerTasks.delete(
  '/:id',
  ensureValidationYupRequest(schemaValidationTasksDelete),
  controllerTasks.delete
);
routerTasks.put(
  '/:id',
  ensureValidationYupRequest(schemaValidationTasksUpdate),
  controllerTasks.update
);

export default routerTasks;
