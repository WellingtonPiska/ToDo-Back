import { Request, Response } from 'express';

import { ServiceCreateSections } from '../services/ServiceCreateSections';
import { ServiceDeleteSections } from '../services/ServiceDeleteSections';
import { ServiceFindSections } from '../services/ServiceFindSections';
import { ServiceListSections } from '../services/ServiceListSections';
import { ServiceUpdateSections } from '../services/ServiceUpdateSections';

export default class SectionsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListSections();
    const data = await svcList.execute();
    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['sections']
    const { id } = request.params;

    const serviceFindSections = new ServiceFindSections();

    const sections = await serviceFindSections.execute({ id });

    return response.json(sections);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['sections']
    const { name, project, order } = request.body;

    const serviceCreateSections = new ServiceCreateSections();
    const sections = await serviceCreateSections.execute({
      name,
      project,
      order,
    });

    return response.json(sections);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['sections']
    const { id } = request.params;
    const serviceDeleteSections = new ServiceDeleteSections();
    const deleted = await serviceDeleteSections.execute({
      id,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, order, project } = request.body;
    const { id } = request.params;

    const serviceUpdateSections = new ServiceUpdateSections();
    const sections = await serviceUpdateSections.execute({
      id,
      name,
      order,
      project,
    });

    return response.json(sections);
  }
}