import { Router } from 'express';

const controllerPerfil = new ControllerPerfil();
const routerPerfil = Router();

routerPerfil.get('/', controllerPerfil.list);
