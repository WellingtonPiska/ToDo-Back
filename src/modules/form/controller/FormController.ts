import { Request, Response } from 'express';

import { ServiceCreateForm } from '../services/ServiceCreateForm';
import { ServiceFindForm } from '../services/ServiceFindForm';
import { ServiceListForm } from '../services/ServiceListForm';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListForm();
    const data = await svcList.execute();
    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Status']
    const { id } = request.params;

    const serviceFindForm = new ServiceFindForm();

    const form = await serviceFindForm.execute({ id });

    return response.json(form);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Status']
    const { title, description } = request.body;

    const serviceCreateForm = new ServiceCreateForm();
    const result = await serviceCreateForm.execute({
      title,
      description,
    });

    return response.json(result);
  }
}
