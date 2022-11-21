import { Router } from 'express';

const controllerApportion = new ControllerApportion();
const routerApportion = Router();

routerApportion.get('/', controllerApportion.list)

export default routerApportion;
