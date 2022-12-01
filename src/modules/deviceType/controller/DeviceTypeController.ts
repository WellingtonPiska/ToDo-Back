import { Request, Response } from "express";
import { ServiceCreateDeviceType } from "../services/ServiceCreateDeviceType";
import { ServiceDeleteDeviceType } from "../services/ServiceDeleteDeviceType";
import { ServiceFindDeviceType } from "../services/ServiceFindDeviceType";
import { ServiceListDeviceType } from "../services/ServiceListDeviceType";
import { ServiceUpdateDeviceType } from "../services/ServiceUpdateDeviceType";

export default class CostCenterController {

  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListDeviceType = new ServiceListDeviceType();

    const deviceType = await serviceListDeviceType.execute({ page, limit, ref });

    return response.json(deviceType)
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindDeviceType = new ServiceFindDeviceType();

    const deviceType = await serviceFindDeviceType.execute({ id });

    return response.json(deviceType);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, status, obs, cost } = request.body;

    const serviceCreateDeviceType = new ServiceCreateDeviceType();
    const deviceType = await serviceCreateDeviceType.execute({
      name,
      status,
      obs,
      cost
    });

    return response.json(deviceType);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, status, obs, cost } = request.body;
    const { id } = request.params;


    const serviceUpdateDeviceType = new ServiceUpdateDeviceType();
    const deviceType = await serviceUpdateDeviceType.execute({
      id,
      name,
      status,
      cost,
      obs
    });

    return response.json(deviceType);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteDeviceType = new ServiceDeleteDeviceType();
    const deviceType = await serviceDeleteDeviceType.execute({
      id,
    });

    return response.json(deviceType);
  }
}
