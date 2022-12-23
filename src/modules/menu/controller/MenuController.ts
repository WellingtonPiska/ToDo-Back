import { Request, Response } from 'express';

import { ServiceCreateMenu } from '../services/ServiceCreateMenu';
import { ServiceDeleteMenu } from '../services/ServiceDeleteMenu';
import { ServiceFindMenu } from '../services/ServiceFindMenu';
import { ServiceListMenu } from '../services/ServiceListMenu';
import { ServiceUpdateMenu } from '../services/ServiceUpdateMenu';

export default class MenuController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const serviceListMenu = new ServiceListMenu();

    const menu = await serviceListMenu.execute({
      page,
      limit,
      ref,
      search,
    });

    return response.json(menu);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });
    return response.json(menu);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, menuFather, groupMenu, uri, icon, order } = request.body;
    const serviceCreateMenu = new ServiceCreateMenu();
    const result = await serviceCreateMenu.execute({
      name,
      order,
      icon,
      groupMenu,
      menuFather,
      uri,
    });
    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, menuFather, groupMenu, icon, uri, order } = request.body;

    const serviceUpdateMenu = new ServiceUpdateMenu();
    const data = await serviceUpdateMenu.execute({
      id,
      name,
      icon,
      uri,
      menuFather,
      groupMenu,
      order,
    });

    return response.json(data);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteMenu = new ServiceDeleteMenu();
    const menu = await serviceDeleteMenu.execute({
      id,
    });

    return response.json(menu);
  }
}
