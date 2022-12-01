import { Request, Response } from "express";
import { ServiceCreateUserSector } from "../services/ServiceCreateUserSector";
import { ServiceDeleteUserSector } from "../services/ServiceDeleteUserSector";
import { ServiceFindUserSector } from "../services/ServiceFindUserSector";
import { ServiceListUserSector } from "../services/ServiceListUserSector";
import { ServiceUpdateUserSector } from "../services/ServiceUpdateUserSector";

export default class ControllerUserSector {

  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListUserSector = new ServiceListUserSector();

    const userSector = await serviceListUserSector.execute({ page, limit });

    return response.json(userSector);
  }
  public async find(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const serviceFindUserSector = new ServiceFindUserSector();
    const userSector = await serviceFindUserSector.execute({ id });
    return response.json(userSector);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { costCenter, user } =
      request.body;
    const serviceCreateUserSector = new ServiceCreateUserSector();
    const userSector = await serviceCreateUserSector.execute({
      user,
      costCenter
    });
    return response.json(userSector);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user, costCenter } =
      request.body;

    const serviceUpdateUserSector = new ServiceUpdateUserSector();
    const userSector = await serviceUpdateUserSector.execute({
      id,
      costCenter,
      user
    });

    return response.json(userSector);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteUserSector = new ServiceDeleteUserSector();
    const userSector = await serviceDeleteUserSector.execute({
      id,
    });
    return response.json(userSector);
  }

}
