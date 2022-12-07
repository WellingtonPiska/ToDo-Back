import { Request, Response } from 'express';

import { ServiceCreateUser } from '../services/ServiceCreateUser';
import { ServiceDeleteUser } from '../services/ServiceDeleteUser';
import { ServiceFindUser } from '../services/ServiceFindUser';
import { ServiceListUser } from '../services/ServiceListUser';
import { ServiceUpdateUser } from '../services/ServiceUpdateUser';
// import { ServiceCreateStatus } from '../services/ServiceCreateStatus';
// import { ServiceDeleteStatus } from '../services/ServiceDeleteStatus';
// import { ServiceFindStatus } from '../services/ServiceFindStatus';

// import { ServiceUpdateStatus } from '../services/ServiceUpdateStatus';

export default class UserController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListUser = new ServiceListUser();

    const user = await serviceListUser.execute({ page, limit, ref });

    return response.json(user);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const svcFind = new ServiceFindUser();
    const data = await svcFind.execute({ id });
    return response.json(data);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter,
    } = request.body;
    const serviceCreateUser = new ServiceCreateUser();
    const result = await serviceCreateUser.execute({
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter,
    });
    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter,
    } = request.body;

    const serviceUpdateUser = new ServiceUpdateUser();
    const data = await serviceUpdateUser.execute({
      id,
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter,
    });

    return response.json(data);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteUser = new ServiceDeleteUser();
    const data = await serviceDeleteUser.execute({
      id,
    });
    return response.json(data);
  }
}
