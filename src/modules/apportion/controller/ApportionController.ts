import { Request, Response } from "express";


export default class CostCenterController {

  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListApportion = new ServiceListApportion();

    const CostCenter = await serviceListApportion.execute();

    return response.json(CostCenter);
  }
}
