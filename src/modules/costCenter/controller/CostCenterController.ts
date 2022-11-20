import { Request, Response } from 'express';
import { ServiceCreateCostCenter } from '../services/ServiceCreateCostCenter';
import { ServiceDeleteCostCenter } from '../services/ServiceDeleteCostCenter';
import { ServiceFindCostCenter } from '../services/ServiceFindCostCenter';
import { ServiceListCostCenter } from '../services/ServiceListCostCenter';
import { ServiceUpdateCostCenter } from '../services/ServiceUpdateCostCenter';


export default class CostCenterController {

  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListCostCenter = new ServiceListCostCenter();

    const CostCenter = await serviceListCostCenter.execute();

    return response.json(CostCenter);
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
