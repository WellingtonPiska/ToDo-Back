import { Router } from 'express';

import routerForm from '../../modules/form/routes';
import routerProject from '../../modules/project/routes';
import routerSections from '../../modules/sections/routes';
import routerTasks from '../../modules/tasks/routes';
import routerUser from '../../modules/user/routes';

const routes = Router();

routes.use('/form', routerForm);
routes.use('/user', routerUser);
routes.use('/project', routerProject);
routes.use('/project', routerSections);
routes.use('/tasks', routerTasks);
export default routes;
