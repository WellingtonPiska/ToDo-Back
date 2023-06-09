import { Request, Response } from 'express';

import { ServiceCreateProject } from '../services/ServiceCreateProject';
import { ServiceDeleteProject } from '../services/ServiceDeleteProject';
import { ServiceFindProject } from '../services/ServiceFindProject';
import { ServiceListProject } from '../services/ServiceListProject';
import { ServiceUpdateProject } from '../services/ServiceUpdateProject';

export default class ProjectController {
  public async list(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['project']
    const svcList = new ServiceListProject();
    const data = await svcList.execute();

    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['project']
    const { id } = request.params;

    const serviceFindProject = new ServiceFindProject();

    const project = await serviceFindProject.execute({ id });

    return response.json(project);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['project']
    const { name, description, responsible, order } = request.body;

    const serviceCreateProject = new ServiceCreateProject();
    const result = await serviceCreateProject.execute({
      name,
      description,
      responsible,
      order,
    });

    return response.json(result);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['project']
    const { id } = request.params;
    const serviceDeleteProject = new ServiceDeleteProject();
    const deleted = await serviceDeleteProject.execute({
      id,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, description, responsible, order } = request.body;
    const { id } = request.params;

    const serviceUpdateProject = new ServiceUpdateProject();
    const project = await serviceUpdateProject.execute({
      id,
      name,
      description,
      responsible,
      order,
    });

    return response.json(project);
  }
}
