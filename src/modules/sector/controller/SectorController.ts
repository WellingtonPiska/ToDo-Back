import { Request, Response } from "express";
import { ServiceCreateSector } from "../services/ServiceCreateSector";
import { ServiceDeleteSector } from "../services/ServiceDeleteSector";
import { ServiceFindSector } from "../services/ServiceFindSector";
import { ServiceListSector } from "../services/ServiceListSector";
import { ServiceUpdateSector } from "../services/ServiceUpdateSector";

export default class SectorController {

  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListPlace = new ServiceListSector();

    const sector = await serviceListPlace.execute();

    return response.json(sector);
  }


  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindPlace = new ServiceFindSector();

    const place = await serviceFindPlace.execute({ id });

    return response.json(place);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, type, dn, guid, obs, status, sectorFather, costCenter } = request.body;

    const serviceCreatePlace = new ServiceCreateSector();
    const result = await serviceCreatePlace.execute({
      name,
      type,
      obs,
      status,
      dn,
      guid,
      sectorFather,
      costCenter
    });

    return response.json(result);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteSector = new ServiceDeleteSector();
    const data = await serviceDeleteSector.execute({
      id,
    });

    return response.json(data);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, type, dn, guid, obs, status, sectorFather, costCenter } = request.body;

    const serviceUpdateSector = new ServiceUpdateSector();
    const data = await serviceUpdateSector.execute({
      id,
      name,
      type,
      obs,
      status,
      dn,
      guid,
      sectorFather,
      costCenter
    });

    return response.json(data);
  }

}





