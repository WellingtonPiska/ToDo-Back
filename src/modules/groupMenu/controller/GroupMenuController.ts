import { Request, Response } from 'express';

import { ServiceCreateGroupMenu } from '../services/ServiceCreateGroupMenu';
import { ServiceDeleteGroupMenu } from '../services/ServiceDeleteGroupMenu';
import { ServiceFindGroupMenu } from '../services/ServiceFindGroupMenu';
import { ServiceListGroupMenu } from '../services/ServiceListGroupMenu';
import { ServiceUpdateGroupMenu } from '../services/ServiceUpdateGroupMenu';

export default class GroupMenuController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const serviceListGroupMenu = new ServiceListGroupMenu();

    const groupMenu = await serviceListGroupMenu.execute({
      page,
      limit,
      ref,
      search,
    });

    return response.json(groupMenu);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindGroupMenu = new ServiceFindGroupMenu();

    const groupMenu = await serviceFindGroupMenu.execute({ id });

    return response.json(groupMenu);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const serviceCreateGroupMenu = new ServiceCreateGroupMenu();
    const groupMenu = await serviceCreateGroupMenu.execute({
      name,
      description,
    });

    return response.json(groupMenu);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const { id } = request.params;

    const serviceUpdateGroupMenu = new ServiceUpdateGroupMenu();
    const groupMenu = await serviceUpdateGroupMenu.execute({
      id,
      name,
      description,
    });

    return response.json(groupMenu);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteGroupMenu = new ServiceDeleteGroupMenu();
    const groupMenu = await serviceDeleteGroupMenu.execute({
      id,
    });

    return response.json(groupMenu);
  }
}
