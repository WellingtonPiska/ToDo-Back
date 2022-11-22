import { Request, Response } from "express";
import { ServiceCreateUserCostCenter } from "../services/ServiceCreateUserCostCenter";
import { ServiceDeleteUserCostCenter } from "../services/ServiceDeleteUserCostCenter";
import { ServiceFindUserCostCenter } from "../services/ServiceFindUserCostCenter";
import { ServiceListUserCostCenter } from "../services/ServiceListUserCostCenter";

export default class UserController {

  public async list(request: Request, response: Response): Promise<Response> {


    const serviceListUserCostCenter = new ServiceListUserCostCenter();

    const ucc = await serviceListUserCostCenter.execute();

    return response.json(ucc);
  }
  public async find(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const serviceFindUserCostCenter = new ServiceFindUserCostCenter();
    const data = await serviceFindUserCostCenter.execute({ id });
    return response.json(data);

  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { costCenter, user } =
      request.body;
    const serviceCreateUserCostCenter = new ServiceCreateUserCostCenter();
    const result = await serviceCreateUserCostCenter.execute({
      user,
      costCenter
    });
    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user, costCenter } =
      request.body;

    const serviceUpdateUserCostCenter = new ServiceUpdateUserCostCenter();
    const data = await serviceUpdateUserCostCenter.execute({
      id,
      costCenter,
      user
    });

    return response.json(data);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteUserCostCenter = new ServiceDeleteUserCostCenter();
    const data = await serviceDeleteUserCostCenter.execute({
      id,
    });
    return response.json(data);
  }

}
