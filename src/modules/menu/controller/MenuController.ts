import { Request, Response } from "express";
import { ServiceCreateMenu } from "../services/ServiceCreateMenu";
import { ServiceDeleteMenu } from "../services/ServiceDeleteMenu";
import { ServiceFindMenu } from "../services/ServiceFindMenu";
import { ServiceListMenu } from "../services/ServiceListMenu";
import { ServiceUpdateMenu } from "../services/ServiceUpdateMenu";

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const serviceListMenu = new ServiceListMenu();
    const menu = await serviceListMenu.execute({ page, limit });
    return response.json(menu);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindMenu = new ServiceFindMenu();

    const menu = await serviceFindMenu.execute({ id });

    return response.json(menu);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const serviceCreateMenu = new ServiceCreateMenu();
    const menu = await serviceCreateMenu.execute({
      name,
    });
    return response.json(menu);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { id } = request.params;

    const serviceUpdateMenu = new ServiceUpdateMenu();
    const menu = await serviceUpdateMenu.execute({
      id,
      name,
    });

    return response.json(menu);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteMenu = new ServiceDeleteMenu();
    const deleted = await serviceDeleteMenu.execute({
      id,
    });
    return response.json(deleted);
  }

}
