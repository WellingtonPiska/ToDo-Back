import { Request, Response } from 'express';

import { ServiceCreateGroup } from '../services/ServiceCreateGroup';
import { ServiceDeleteGroup } from '../services/ServiceDeleteGroup';
import { ServiceFindGroup } from '../services/ServiceFindGroup';
import { ServiceListGroup } from '../services/ServiceListGroup';
import { ServiceUpdateGroup } from '../services/ServiceUpdateGroup';

export default class GroupController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListGroup = new ServiceListGroup();

    const group = await serviceListGroup.execute({ page, limit, ref });

    return response.json(group);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindGroup = new ServiceFindGroup();

    const group = await serviceFindGroup.execute({ id });

    return response.json(group);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, type, mail, dn, sid, sync } = request.body;

    const serviceCreateGroup = new ServiceCreateGroup();
    const group = await serviceCreateGroup.execute({
      name,
      type,
      mail,
      dn,
      sid,
      sync,
    });

    return response.json(group);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, type, mail, dn, sid, sync } = request.body;
    const { id } = request.params;

    const serviceUpdateGroup = new ServiceUpdateGroup();
    const group = await serviceUpdateGroup.execute({
      id,
      name,
      type,
      mail,
      dn,
      sid,
      sync,
    });

    return response.json(group);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Profile']
    const { id } = request.params;
    const serviceDeleteGroup = new ServiceDeleteGroup();
    const deleted = await serviceDeleteGroup.execute({
      id,
    });
    return response.json(deleted);
  }
}
