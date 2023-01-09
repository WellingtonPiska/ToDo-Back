import { Router } from 'express';

import {
  authenticationRoutes,
  loginRoutes,
} from '../../modules/authentication/routes';
import routerForm from '../../modules/form/routes';
import routerHoursControl from '../../modules/hoursControl/routes';
import routerProject from '../../modules/project/routes';
import routerSections from '../../modules/sections/routes';
import routerTasks from '../../modules/tasks/routes';
import routerUser from '../../modules/user/routes';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const routes = Router();

routes.use('/form', ensureAuthenticated, routerForm);
routes.use('/user', ensureAuthenticated, routerUser);
routes.use('/project', ensureAuthenticated, routerProject);
routes.use('/project', ensureAuthenticated, routerSections);
routes.use('/tasks', ensureAuthenticated, routerTasks);
routes.use(
  '/project/tasks/hoursControl',
  ensureAuthenticated,
  routerHoursControl
);
routes.use('/login', loginRoutes);
routes.use('/authentication', authenticationRoutes);

export default routes;
