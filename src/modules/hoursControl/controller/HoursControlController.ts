import { Request, Response } from 'express';

import { ServiceCreateHoursControl } from '../services/ServiceCreateHoursControl';
import { ServiceDeleteHoursControl } from '../services/ServiceDeleteHoursControl';
import { ServiceFindHoursControl } from '../services/ServiceFindHoursControl';
import { ServiceListHoursControl } from '../services/ServiceListHoursControl';
import { ServiceUpdateHoursControl } from '../services/ServiceUpdateHoursControl';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;

    const svcList = new ServiceListHoursControl();
    const data = await svcList.execute({
      page,
      limit,
    });
    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['HoursControl']
    const { id, project, tasks } = request.params;

    const serviceFindHoursControl = new ServiceFindHoursControl();

    const hoursControl = await serviceFindHoursControl.execute({
      id,
      project,
      tasks,
    });

    return response.json(hoursControl);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['User']
    const { dateStart, dateEnd, project, tasks } = request.body;

    const serviceCreateHoursControl = new ServiceCreateHoursControl();
    const hoursCOntrol = await serviceCreateHoursControl.execute({
      dateStart,
      dateEnd,
      project,
      tasks,
    });

    return response.json(hoursCOntrol);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Form']
    const { id, tasks, project } = request.params;
    const serviceDeleteHoursControl = new ServiceDeleteHoursControl();
    const deleted = await serviceDeleteHoursControl.execute({
      id,
      tasks,
      project,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { dateEnd, dateStart, tasks, project } = request.body;
    const { id } = request.params;

    const serviceUpdateHoursControl = new ServiceUpdateHoursControl();
    const hoursControl = await serviceUpdateHoursControl.execute({
      id,
      dateEnd,
      dateStart,
      tasks,
      project,
    });

    return response.json(hoursControl);
  }
}
