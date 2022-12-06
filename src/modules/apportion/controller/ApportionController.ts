import { Request, Response } from 'express';

import { ServiceCreateApportion } from '../services/ServiceCreateApportion';
import { ServiceDeleteApportion } from '../services/ServiceDeleteApportion';
import { ServiceFindApportion } from '../services/ServiceFindApportion';
import { ServiceListApportion } from '../services/ServiceListApportion';
import { ServiceUpdateApportion } from '../services/ServiceUpdateApportion';

export default class CostCenterController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListApportion = new ServiceListApportion();

    const apportion = await serviceListApportion.execute({ page, limit });

    return response.json(apportion);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindApportion = new ServiceFindApportion();
    const data = await serviceFindApportion.execute({ id });
    return response.json(data);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { value, costCenter, apportion } = request.body;
    const serviceCreateApportion = new ServiceCreateApportion();
    const app = await serviceCreateApportion.execute({
      value,
      apportion,
      costCenter,
    });

    return response.json(app);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { value, apportion, costCenter } = request.body;
    const { id } = request.params;

    const serviceUpdateApportion = new ServiceUpdateApportion();
    const app = await serviceUpdateApportion.execute({
      id,
      value,
      apportion,
      costCenter,
    });
    return response.json(app);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteApportion = new ServiceDeleteApportion();
    const app = await serviceDeleteApportion.execute({
      id,
    });

    return response.json(app);
  }
}
