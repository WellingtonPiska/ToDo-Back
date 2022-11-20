import { Router } from 'express';

import routerLocation from '../../modules/location/routes';
import routerStatus from '../../modules/status/routes';
import routerProfile from '../../modules/profile/routes';
import routerCostCenter from '../../modules/costCenter/routes';
import routerSector from '../../modules/sector/routes';
import routerUser from '../../modules/user/routes';

const routes = Router();

routes.use('/location', routerLocation);
routes.use('/status', routerStatus);
routes.use('/profile', routerProfile);
routes.use('/costcenter', routerCostCenter);
routes.use('/sector', routerSector);
routes.use('/user', routerUser);

export default routes;
