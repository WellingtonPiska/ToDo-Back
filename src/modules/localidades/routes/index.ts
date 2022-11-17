import { Router } from 'express';
import validationRequest from '../../../shared/middleware/validationRequest';
import ControllerUF from '../controller/UFController';
import ControllerCidade from '../controller/CidadeController';
import chemaValidationUFFind from '../validation/schemaValidationUFFind';

const controllerUf = new ControllerUF();
const controllerCidade = new ControllerCidade();

const routerLocalidades = Router();

routerLocalidades.get('/estados', controllerUf.list);
routerLocalidades.get(
  '/estados/:uf',
  validationRequest(chemaValidationUFFind),
  controllerUf.find
);
routerLocalidades.get(
  '/cidades/:uf',
  validationRequest(chemaValidationUFFind),
  controllerCidade.list
);

export default routerLocalidades;
