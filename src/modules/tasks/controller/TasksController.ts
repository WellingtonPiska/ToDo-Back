import { Request, Response } from 'express';

import { ServiceCreateTasks } from '../services/ServiceCreateTasks';
import { ServiceDeleteTasks } from '../services/ServiceDeleteTasks';
import { ServiceFindTasks } from '../services/ServiceFindTasks';
import { ServiceListTasks } from '../services/ServiceListTasks';
import { ServiceUpdateTasks } from '../services/ServiceUpdateTasks';

export default class TasksController {
  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListTasks();
    const data = await svcList.execute();

    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['tasks']
    const { id } = request.params;

    const serviceFindTasks = new ServiceFindTasks();

    const tasks = await serviceFindTasks.execute({ id });

    return response.json(tasks);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['tasks']
    const {
      title,
      description,
      responsible,
      project,
      sections,
      situation,
      percentage,
      order,
      priority,
    } = request.body;

    const serviceCreateTasks = new ServiceCreateTasks();
    const result = await serviceCreateTasks.execute({
      title,
      description,
      responsible,
      project,
      sections,
      situation,
      percentage,
      order,
      priority,
    });

    return response.json(result);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['tasks']
    const { id } = request.params;
    const serviceDeleteTasks = new ServiceDeleteTasks();
    const deleted = await serviceDeleteTasks.execute({
      id,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      description,
      responsible,
      project,
      sections,
      order,
      percentage,
      situation,
      title,
      priority,
    } = request.body;
    const { id } = request.params;

    const serviceUpdateTasks = new ServiceUpdateTasks();
    const tasks = await serviceUpdateTasks.execute({
      id,
      title,
      situation,
      description,
      percentage,
      responsible,
      project,
      sections,
      order,
      priority,
    });

    return response.json(tasks);
  }
}
