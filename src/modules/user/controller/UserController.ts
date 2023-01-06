import { Request, Response } from 'express';

import { AuthenticateUser } from '../services/ServiceAuthenticateUser';
import { ServicePutAvatar } from '../services/ServiceAvatarUser';
import { ServiceCreateUser } from '../services/ServiceCreateUser';
import { ServiceDeleteUser } from '../services/ServiceDeleteUser';
import { ServiceFindUser } from '../services/ServiceFindUser';
import { ServiceListUser } from '../services/ServiceListUser';
import { ServiceUpdateUser } from '../services/ServiceUpdateUser';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const search = request.query.search
      ? String(request.query.search)
      : undefined;

    const serviceListUser = new ServiceListUser();
    const data = await serviceListUser.execute({
      page,
      limit,
      search,
    });
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
    const { login, name, lastName, mail, phone, avatar, color, password } =
      request.body;

    const serviceCreateUser = new ServiceCreateUser();
    const user = await serviceCreateUser.execute({
      login,
      name,
      lastName,
      mail,
      phone,
      avatar,
      color,
      password,
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
    const { login, name, lastName, mail, phone, avatar, color } = request.body;
    const { id } = request.params;

    const serviceUpdateUser = new ServiceUpdateUser();
    const user = await serviceUpdateUser.execute({
      id,
      login,
      name,
      lastName,
      mail,
      phone,
      avatar,
      color,
    });

    return response.json(user);
  }
  public async avatar(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { file } = request;
    if (!file) {
      throw new Error('Envie a imagem');
    }
    const servicePutAvatar = new ServicePutAvatar();
    const data = await servicePutAvatar.execute({
      id,
      avatar: file?.filename,
    });

    return response.json(data);
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { password, login } = request.body;

    const authenticateUser = new AuthenticateUser();

    const token = await authenticateUser.execute({
      login,
      password,
    });
    return response.json(token);
  }
}
