import { Router } from "express";
import ControllerUserCostCenter from '../controller/UserCostCenterController';



const controllerUserCostCenter = new ControllerUserCostCenter();
const routerUserCostCenter = Router();

routerUserCostCenter.get('/', controllerUserCostCenter.list);

export default routerUserCostCenter;
