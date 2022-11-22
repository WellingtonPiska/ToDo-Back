import { Request, Response } from 'express';
import { ServiceCreateStatus } from '../services/ServiceCreateStatus';
import { ServiceDeleteStatus } from '../services/ServiceDeleteStatus';
import { ServiceFindStatus } from '../services/ServiceFindStatus';
import { ServiceListStatus } from '../services/ServiceListStatus';
import { ServiceUpdateStatus } from '../services/ServiceUpdateStatus';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const svcList = new ServiceListStatus();
    const data = await svcList.execute({ page, limit });
    return response.json(data);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const svcFind = new ServiceFindStatus();
    const data = await svcFind.execute({ id });
    return response.json(data);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, reference, color } = request.body;

    const serviceCreateStatus = new ServiceCreateStatus();
    const result = await serviceCreateStatus.execute({
      name,
      reference,
      color,
    });

    return response.json(result);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, reference, color } = request.body;
    const { id } = request.params;

    const serviceUpdateStatus = new ServiceUpdateStatus();
    const status = await serviceUpdateStatus.execute({
      id,
      name,
      reference,
      color,
    });

    return response.json(status);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteStatus = new ServiceDeleteStatus();
    const status = await serviceDeleteStatus.execute({
      id,
    });

    return response.json(status);
  }
}
