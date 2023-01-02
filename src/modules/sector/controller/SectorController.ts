import { Request, Response } from 'express';

import { ServiceCreateSector } from '../services/ServiceCreateSector';
import { ServiceDeleteSector } from '../services/ServiceDeleteSector';
import { ServiceEditStatusSector } from '../services/ServiceEditSectorStatus';
import { ServiceFindSector } from '../services/ServiceFindSector';
import { ServiceListSector } from '../services/ServiceListSector';
import { ServiceUpdateSector } from '../services/ServiceUpdateSector';

export default class SectorController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const type = String(request.query.type);
    const serviceListSector = new ServiceListSector();
    if (!type || type === 'undefined') {
      throw new Error('Não foi identificado o type');
    }

    const sector = await serviceListSector.execute({
      page,
      limit,
      ref,
      search,
      type,
    });
    return response.json(sector);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceFindSector = new ServiceFindSector();
    const sector = await serviceFindSector.execute({ id });
    return response.json(sector);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, type, dn, guid, obs, sectorFather, costCenter } =
      request.body;
    const serviceCreateSector = new ServiceCreateSector();
    const sector = await serviceCreateSector.execute({
      name,
      type,
      obs,
      dn,
      guid,
      sectorFather,
      costCenter,
    });
    return response.json(sector);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteSector = new ServiceDeleteSector();
    const sector = await serviceDeleteSector.execute({
      id,
    });
    return response.json(sector);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, type, dn, guid, obs, sectorFather, costCenter } =
      request.body;

    const serviceUpdateSector = new ServiceUpdateSector();
    const sector = await serviceUpdateSector.execute({
      id,
      name,
      type,
      obs,
      dn,
      guid,
      sectorFather,
      costCenter,
    });

    return response.json(sector);
  }
  public async editStatusSector(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const { ref } = request.body;

    const serviceEditStatusSector = new ServiceEditStatusSector();
    const sector = await serviceEditStatusSector.execute({
      id,
      ref,
    });

    return response.json(sector);
  }
}
