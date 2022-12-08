import { Request, Response } from 'express';

import { ServiceCreateProfileMenu } from '../services/ServiceCreateProfileMenu';
import { ServiceDeleteProfileMenu } from '../services/ServiceDeleteProfileMenu';
import { ServiceFindProfileMenu } from '../services/ServiceFindProfileMenu';
import { ServiceListProfileMenu } from '../services/ServiceListProfileMenu';
import { ServiceUpdateProfileMenu } from '../services/ServiceUpdateProfileMenu';

export default class UserController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListProfileMenu = new ServiceListProfileMenu();

    const ucc = await serviceListProfileMenu.execute({ page, limit });

    return response.json(ucc);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceFindProfileMenu = new ServiceFindProfileMenu();
    const profileMenu = await serviceFindProfileMenu.execute({ id });
    return response.json(profileMenu);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { menu, profile } = request.body;
    const serviceCreateProfileMenu = new ServiceCreateProfileMenu();
    const result = await serviceCreateProfileMenu.execute({
      profile,
      menu,
    });
    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { profile, menu } = request.body;

    const serviceUpdateProfileMenu = new ServiceUpdateProfileMenu();
    const data = await serviceUpdateProfileMenu.execute({
      id,
      profile,
      menu,
    });

    return response.json(data);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteProfileMenu = new ServiceDeleteProfileMenu();
    const profileMenu = await serviceDeleteProfileMenu.execute({
      id,
    });

    return response.json(profileMenu);
  }
}
