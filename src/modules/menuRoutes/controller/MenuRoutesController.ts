import { Request, Response } from 'express';

import { ServiceCreateMenuRoutes } from '../services/ServiceCreateMenuRoutes';
import { ServiceDeleteMenuRoutes } from '../services/ServiceDeleteMenuRoutes';
import { ServiceFindMenuRoutes } from '../services/ServiceFindMenuRoutes';
import { ServiceListMenuRoutes } from '../services/ServiceListMenuRoutes';
import { ServiceUpdateMenuRoutes } from '../services/ServiceUpdateMenuRoutes';

export default class UserController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListMenuRoutes = new ServiceListMenuRoutes();

    const ucc = await serviceListMenuRoutes.execute({ page, limit });

    return response.json(ucc);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceFindMenuRoutes = new ServiceFindMenuRoutes();
    const menuRoutes = await serviceFindMenuRoutes.execute({ id });
    return response.json(menuRoutes);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { menu, routes } = request.body;
    const serviceCreateMenuRoutes = new ServiceCreateMenuRoutes();
    const result = await serviceCreateMenuRoutes.execute({
      routes,
      menu,
    });
    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { menu, routes } = request.body;

    const serviceUpdateMenuRoutes = new ServiceUpdateMenuRoutes();
    const data = await serviceUpdateMenuRoutes.execute({
      id,
      menu,
      routes,
    });

    return response.json(data);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteMenuRoutes = new ServiceDeleteMenuRoutes();
    const menuRoutes = await serviceDeleteMenuRoutes.execute({
      id,
    });

    return response.json(menuRoutes);
  }
}
