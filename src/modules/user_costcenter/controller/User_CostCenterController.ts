import { Request, Response } from "express";
import { ServiceListUserCostCenter } from "../services/ServiceListUserCostCenter";

export default class UserController {

  public async list(request: Request, response: Response): Promise<Response> {


    const serviceListUserCostCenter = new ServiceListUserCostCenter();

    const ucc = await serviceListUserCostCenter.execute();

    return response.json(ucc);
  }
}
