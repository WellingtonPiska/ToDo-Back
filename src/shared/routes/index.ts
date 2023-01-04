import { Router } from 'express';

import routerForm from '../../modules/form/routes';
import routerProject from '../../modules/project/routes';
import routerUser from '../../modules/user/routes';

const routes = Router();

routes.use('/form', routerForm);
routes.use('/user', routerUser);
routes.use('/project', routerProject);

export default routes;
