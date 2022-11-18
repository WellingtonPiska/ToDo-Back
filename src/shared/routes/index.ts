import { Router } from 'express';
import routerCostCenter from '../../modules/costCenter/routes';

import routerLocalidades from '../../modules/localidades/routes';
import routerPlace from '../../modules/place/routes';

import routerProfile from '../../modules/profile/routes';
import routerStatus from '../../modules/status/routes';

//import routerAddressCompany from '../modules/addressCompany/routes';
//import routerAddressType from '../modules/addressType/routes';
//import routerCompany from '../modules/company/routes';
//import routerContactCompany from '../modules/contactCompany/routes';
//import routerContactType from '../modules/contactType/routes';

//import routerDevice from "../modules/devicetype/routes";
//import routerGroup from '../modules/group/routes';

const routes = Router();

routes.use('/localidades', routerLocalidades);

routes.use('/status', routerStatus);
routes.use('/costcenter', routerCostCenter);
routes.use('/profile', routerProfile)
routes.use('/place', routerPlace)
//routes.use('/devicetype', routerDevice);
//routes.use('/company', routerCompany);
//routes.use('/contacttype', routerContactType);
//routes.use('/contactcompany', routerContactCompany)
//routes.use('/addresstype', routerAddressType)
//routes.use('/addresscompany', routerAddressCompany)
//routes.use('/group', routerGroup)

export default routes;
