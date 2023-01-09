import { Request, Response } from 'express';

import { AuthenticateUser } from '../services/ServiceAuthentication';
import { ServiceCreateAuthentication } from '../services/ServiceCreateAuthentication';
import { ServiceDeleteAuthentication } from '../services/ServiceDeleteAuthentication';
import { ServiceFindAuthentication } from '../services/ServiceFindAuthentication';
import { ServiceListAuthentication } from '../services/ServiceListAuthentication';
import { ServiceUpdateAuthentication } from '../services/ServiceUpdateAuthentication';

export default class AuthenticationController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { password, login } = request.body;

    const authenticateUser = new AuthenticateUser();

    const token = await authenticateUser.execute({
      login,
      password,
    });
    return response.json(token);
  }
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListAuthentication = new ServiceListAuthentication();
    const authentication = await serviceListAuthentication.execute();
    return response.json(authentication);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindAuthentication = new ServiceFindAuthentication();

    const authentication = await serviceFindAuthentication.execute({ id });

    return response.json(authentication);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { token, user } = request.body;

    const serviceCreateAuthentication = new ServiceCreateAuthentication();
    const authentication = await serviceCreateAuthentication.execute({
      token,
      user,
    });

    return response.json(authentication);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteAuthentication = new ServiceDeleteAuthentication();
    const deleted = await serviceDeleteAuthentication.execute({
      id,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { user, token } = request.body;
    const { id } = request.params;

    const serviceUpdateAuthentication = new ServiceUpdateAuthentication();
    const authentication = await serviceUpdateAuthentication.execute({
      id,
      user,
      token,
    });

    return response.json(authentication);
  }
}
