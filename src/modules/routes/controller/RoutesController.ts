import { Request, Response } from 'express';

import { ServiceCreateRoutes } from '../services/ServiceCreateRoutes';
import { ServiceDeleteRoutes } from '../services/ServiceDeleteRoutes';
import { ServiceFindRoutes } from '../services/ServiceFindRoutes';
import { ServiceListRoutes } from '../services/ServiceListRoutes';
import { ServiceUpdateRoutes } from '../services/ServiceUpdateRoutes';

export default class RoutesController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListRoutes = new ServiceListRoutes();

    const routes = await serviceListRoutes.execute({
      page,
      limit,
      ref,
    });

    return response.json(routes);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindRoutes = new ServiceFindRoutes();

    const routes = await serviceFindRoutes.execute({ id });

    return response.json(routes);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { method, description, uri } = request.body;

    const serviceCreateRoutes = new ServiceCreateRoutes();
    const routes = await serviceCreateRoutes.execute({
      method,
      description,
      uri,
    });

    return response.json(routes);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { method, uri, description } = request.body;
    const { id } = request.params;

    const serviceUpdateRoutes = new ServiceUpdateRoutes();
    const routes = await serviceUpdateRoutes.execute({
      id,
      method,
      uri,
      description,
    });

    return response.json(routes);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteRoutes = new ServiceDeleteRoutes();
    const routes = await serviceDeleteRoutes.execute({
      id,
    });

    return response.json(routes);
  }
}
