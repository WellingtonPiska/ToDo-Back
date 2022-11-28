import { Request, Response } from 'express';
import { ServiceCreateCostCenter } from '../services/ServiceCreateCostCenter';
import { ServiceDeleteCostCenter } from '../services/ServiceDeleteCostCenter';
import { ServiceFindCostCenter } from '../services/ServiceFindCostCenter';
import { ServiceListCostCenter } from '../services/ServiceListCostCenter';
import { ServiceUpdateCostCenter } from '../services/ServiceUpdateCostCenter';


export default class CostCenterController {

  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListCostCenter = new ServiceListCostCenter();

    const costCenter = await serviceListCostCenter.execute({ page, limit, ref });

    return response.json(costCenter)
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindCostCenter = new ServiceFindCostCenter();

    const costCenter = await serviceFindCostCenter.execute({ id });

    return response.json(costCenter);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, apportion, obs, status } = request.body;

    const serviceCreateCostCenter = new ServiceCreateCostCenter();
    const costCenter = await serviceCreateCostCenter.execute({
      name,
      apportion,
      obs,
      status
    });

    return response.json(costCenter);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, apportion, obs, status } = request.body;
    const { id } = request.params;


    const serviceUpdateCostCenter = new ServiceUpdateCostCenter();
    const costCenter = await serviceUpdateCostCenter.execute({
      id,
      name,
      apportion,
      obs,
      status
    });

    return response.json(costCenter);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteCostCenter = new ServiceDeleteCostCenter();
    const costCenter = await serviceDeleteCostCenter.execute({
      id,
    });

    return response.json(costCenter);
  }
}
