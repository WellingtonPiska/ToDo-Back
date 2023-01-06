import { Router } from 'express';

import routerForm from '../../modules/form/routes';
import routerHoursControl from '../../modules/hoursControl/routes';
import routerProject from '../../modules/project/routes';
import routerSections from '../../modules/sections/routes';
import routerTasks from '../../modules/tasks/routes';
import routerUser from '../../modules/user/routes';
import { authenticateRoutes } from '../../modules/user/routes/authenticate.routes';

const routes = Router();

routes.use('/form', routerForm);
routes.use('/user', routerUser);
routes.use('/project', routerProject);
routes.use('/project', routerSections);
routes.use('/tasks', routerTasks);
routes.use('/project/tasks/hoursControl', routerHoursControl);
routes.use(authenticateRoutes);

export default routes;
