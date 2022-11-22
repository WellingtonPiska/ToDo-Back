import { Router } from 'express';

import routerApportion from '../../modules/apportion/routes';
import routerCostCenter from '../../modules/costCenter/routes';
import routerLocation from '../../modules/location/routes';
import routerProfile from '../../modules/profile/routes';
import routerSector from '../../modules/sector/routes';
import routerStatus from '../../modules/status/routes';
import routerSync from '../../modules/sync/routes';
import routerUser from '../../modules/user/routes';

const routes = Router();

routes.use('/location', routerLocation);
routes.use('/sync', routerSync);
routes.use('/status', routerStatus);
routes.use('/profile', routerProfile);
routes.use('/costcenter', routerCostCenter);
routes.use('/sector', routerSector);
routes.use('/user', routerUser);
routes.use('/apportion', routerApportion)

export default routes;
