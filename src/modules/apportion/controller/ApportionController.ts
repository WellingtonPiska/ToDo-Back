import { Request, Response } from "express";
import { ServiceCreateApportion } from "../services/ServiceCreateApportion";
import { ServiceFindApportion } from "../services/ServiceFindApportion";
import { ServiceListApportion } from "../services/ServiceListApportion";


export default class CostCenterController {

  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListApportion = new ServiceListApportion
    const CostCenter = await serviceListApportion.execute();

    return response.json(CostCenter);
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
      costCenter
    });

    return response.json(app);
  }
}
