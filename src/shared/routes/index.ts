import { Router } from 'express';

import routerForm from '../../modules/form/routes';

const routes = Router();

routes.use('/form', routerForm);

export default routes;
