import { Router } from 'express';

import logRequest from '../middleware/logRequest';

import routerPopulate from '../../modules/_populate/routes';
import routerApportion from '../../modules/apportion/routes';
import routerCompany from '../../modules/company/routes';
import routerCompanyContact from '../../modules/companyContact/routes';
import routerContactType from '../../modules/contactType/routes';
import routerCostCenter from '../../modules/costCenter/routes';
import routerDeviceType from '../../modules/deviceType/routes';
import routerGroup from '../../modules/group/routes';
import routerGroupMenu from '../../modules/groupMenu/routes';
import routerLocation from '../../modules/location/routes';
import routerMenu from '../../modules/menu/routes';
import routerMenuRoutes from '../../modules/menuRoutes/routes';
import routerModel from '../../modules/model/routes';
import { routerMulter } from '../../modules/multerTest/routes';
import routerProfileMenu from '../../modules/profile_menu/routes';
import routerProfile from '../../modules/profile/routes';
import routerRoutes from '../../modules/routes/routes';
import routerSector from '../../modules/sector/routes';
import routerStatus from '../../modules/status/routes';
import routerSync from '../../modules/sync/routes';
import routerUserCostCenter from '../../modules/user_costcenter/routes';
import routerUserSector from '../../modules/user_Sector/routes';
import routerUser from '../../modules/user/routes';
import routerAuth from '../../modules/authentication/routes';

const routes = Router();

routes.use('/auth', routerAuth);
routes.use('/populate', routerPopulate);
routes.use('/location', routerLocation);
routes.use('/sync', routerSync);
routes.use('/status', logRequest, routerStatus);
routes.use('/profile', routerProfile);
routes.use('/costCenter', routerCostCenter);
routes.use('/userCostCenter', routerUserCostCenter);
routes.use('/sector', routerSector);
routes.use('/userSector', routerUserSector);
routes.use('/user', routerUser);
routes.use('/apportion', routerApportion);
routes.use('/group', routerGroup);
routes.use('/menu', routerMenu);
routes.use('/contactType', routerContactType);
routes.use('/company', routerCompany);
routes.use('/company', routerCompanyContact);
routes.use('/deviceType', routerDeviceType);
routes.use('/model', routerModel);
routes.use('/multer', routerMulter);
routes.use('/routes', routerRoutes);
routes.use('/groupMenu', routerGroupMenu);
routes.use('/menu', routerMenu);
routes.use('/menuRoutes', routerMenuRoutes);
routes.use('/profileMenu', routerProfileMenu);

export default routes;
