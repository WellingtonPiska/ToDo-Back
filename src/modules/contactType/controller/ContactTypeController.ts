import { Request, Response } from 'express';

import { ServiceCreateContactType } from '../services/ServiceCreateContactType';
import { ServiceDeleteContactType } from '../services/ServiceDeleteContactType';
import { ServiceFindContactType } from '../services/ServiceFindContactType';
import { ServiceListContactType } from '../services/ServiceListContactType';
import { ServiceUpdateContactType } from '../services/ServiceUpdateContactType';

export default class CostCenterController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListContactType = new ServiceListContactType();

    const contactType = await serviceListContactType.execute({
      page,
      limit,
      ref,
    });

    return response.json(contactType);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindContactType = new ServiceFindContactType();

    const contactType = await serviceFindContactType.execute({ id });

    return response.json(contactType);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const serviceCreateContactType = new ServiceCreateContactType();
    const contactType = await serviceCreateContactType.execute({
      name,
    });

    return response.json(contactType);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const serviceUpdateContactType = new ServiceUpdateContactType();
    const contactType = await serviceUpdateContactType.execute({
      id,
      name,
    });

    return response.json(contactType);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteContactType = new ServiceDeleteContactType();
    const contactType = await serviceDeleteContactType.execute({
      id,
    });

    return response.json(contactType);
  }
}
