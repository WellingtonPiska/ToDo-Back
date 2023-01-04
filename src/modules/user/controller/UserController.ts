import { Request, Response } from 'express';

import { ServiceCreateUser } from '../services/ServiceCreateUser';
import { ServiceDeleteUser } from '../services/ServiceDeleteUser';
import { ServiceFindUser } from '../services/ServiceFindUser';
import { ServiceListUser } from '../services/ServiceListUser';
import { ServiceUpdateUser } from '../services/ServiceUpdateUser';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListUser();
    const data = await svcList.execute();
    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['User']
    const { id } = request.params;

    const serviceFindUser = new ServiceFindUser();

    const user = await serviceFindUser.execute({ id });

    return response.json(user);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['User']
    const { login, password, name, lastName, mail, phone, avatar } =
      request.body;

    const serviceCreateUser = new ServiceCreateUser();
    const user = await serviceCreateUser.execute({
      login,
      password,
      name,
      lastName,
      mail,
      phone,
      avatar,
    });

    return response.json(user);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['User']
    const { id } = request.params;
    const serviceDeleteUser = new ServiceDeleteUser();
    const user = await serviceDeleteUser.execute({
      id,
    });
    return response.json(user);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { login, password, name, lastName, mail, phone, avatar } =
      request.body;
    const { id } = request.params;

    const serviceUpdateUser = new ServiceUpdateUser();
    const user = await serviceUpdateUser.execute({
      id,
      login,
      password,
      name,
      lastName,
      mail,
      phone,
      avatar,
    });

    return response.json(user);
  }
}
