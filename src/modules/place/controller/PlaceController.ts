import { Request, Response } from "express";
import { ServiceCreatePlace } from "../services/ServiceCreatePlace";
import { ServiceDeletePlace } from "../services/ServiceDeletePlace";
import { ServiceFindPlace } from "../services/ServiceFindPlace";
import { ServiceListPlace } from "../services/ServiceListPlace";
import { ServiceUpdatePlace } from "../services/ServiceUpdatePlace";

export default class PlaceController {
  public async list(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Place']
    //#swagger.summary = 'List All Place'
    const serviceListPlace = new ServiceListPlace();

    const place = await serviceListPlace.execute();

    return response.json(place);
  }


  public async find(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Place']
    const { id } = request.params;

    const serviceFindPlace = new ServiceFindPlace();

    const place = await serviceFindPlace.execute({ id });

    return response.json(place);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Place']
    const { name, type, dn, guid, obs, status, placeFather, costCenter } = request.body;

    const serviceCreatePlace = new ServiceCreatePlace();
    const result = await serviceCreatePlace.execute({
      name,
      type,
      obs,
      status,
      dn,
      guid,
      placeFather,
      costCenter
    });

    return response.json(result);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Profile']
    const { id } = request.params;
    const serviceDeletePlace = new ServiceDeletePlace();
    const place = await serviceDeletePlace.execute({
      id,
    });

    return response.json(place);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Place']
    const { id } = request.params;
    const { name, type, dn, guid, obs, status, placeFather, costCenter } = request.body;

    const serviceUpdatePlace = new ServiceUpdatePlace();
    const result = await serviceUpdatePlace.execute({
      id,
      name,
      type,
      obs,
      status,
      dn,
      guid,
      placeFather,
      costCenter
    });

    return response.json(result);
  }

}





