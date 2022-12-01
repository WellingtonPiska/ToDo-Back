import { Router } from 'express';

import routerApportion from '../../modules/apportion/routes';
import routerCompany from '../../modules/company/routes';
import routerCompanyContact from '../../modules/companyContact/routes';
import routerContactType from '../../modules/contactType/routes';
import routerCostCenter from '../../modules/costCenter/routes';
import routerDeviceType from '../../modules/deviceType/routes';
import routerGroup from '../../modules/group/routes';
import routerLocation from '../../modules/location/routes';
import routerMenu from '../../modules/menu/routes';
import routerProfile from '../../modules/profile/routes';
import routerSector from '../../modules/sector/routes';
import routerStatus from '../../modules/status/routes';
import routerSync from '../../modules/sync/routes';
import routerUser from '../../modules/user/routes';
import routerUserCostCenter from '../../modules/user_costcenter/routes';
import routerUserSector from '../../modules/user_Sector/routes';

const routes = Router();

routes.use('/location', routerLocation);
routes.use('/sync', routerSync);
routes.use('/status', routerStatus);
routes.use('/profile', routerProfile);
routes.use('/costcenter', routerCostCenter);
routes.use('/user_costcenter', routerUserCostCenter)
routes.use('/sector', routerSector);
routes.use('/user_sector', routerUserSector)
routes.use('/user', routerUser);
routes.use('/apportion', routerApportion)
routes.use('/group', routerGroup)
routes.use('/menu', routerMenu)
routes.use('/contact_type', routerContactType)
routes.use('/company', routerCompany)
routes.use('/company', routerCompanyContact)
routes.use('/device_type', routerDeviceType)
export default routes;
