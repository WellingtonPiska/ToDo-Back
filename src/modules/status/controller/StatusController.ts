import { Request, Response } from 'express';
import { ServiceListStatus } from '../services/ServiceListStatus';
import { ServiceFindStatus } from '../services/ServiceFindStatus';
import { ServiceCreateStatus } from '../services/ServiceCreateStatus';
import { ServiceUpdateStatus } from '../services/ServiceUpdateStatus';
import { ServiceDeleteStatus } from '../services/ServiceDeleteStatus';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    //#swagger.summary = 'List All Status'
    const serviceListStatus = new ServiceListStatus();

    const status = await serviceListStatus.execute();

    return response.json(status);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { id } = request.params;

    const serviceFindStatus = new ServiceFindStatus();

    const status = await serviceFindStatus.execute({ id });

    return response.json(status);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { nome, referencia, cor } = request.body;

    const serviceCreateStatus = new ServiceCreateStatus();
    const result = await serviceCreateStatus.execute({
      nome,
      referencia,
      cor,
    });

    return response.json(result);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { nome, referencia, cor } = request.body;
    const { id } = request.params;

    const serviceUpdateStatus = new ServiceUpdateStatus();
    const status = await serviceUpdateStatus.execute({
      id,
      nome,
      referencia,
      cor,
    });

    return response.json(status);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { id } = request.params;
    const serviceDeleteStatus = new ServiceDeleteStatus();
    const status = await serviceDeleteStatus.execute({
      id,
    });

    return response.json(status);
  }
}
