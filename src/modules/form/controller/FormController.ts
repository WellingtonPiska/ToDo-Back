import { Request, Response } from 'express';

import { ServiceCreateForm } from '../services/ServiceCreateForm';
import { ServiceDeleteForm } from '../services/ServiceDeleteForm';
import { ServiceFindForm } from '../services/ServiceFindForm';
import { ServiceListForm } from '../services/ServiceListForm';
import { ServiceUpdateForm } from '../services/ServiceUpdateForm';

export default class StatusController {
  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListForm();
    const data = await svcList.execute();
    return response.json(data);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Form']
    const { id } = request.params;

    const serviceFindForm = new ServiceFindForm();

    const form = await serviceFindForm.execute({ id });

    return response.json(form);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Form']
    const { title, description } = request.body;

    const serviceCreateForm = new ServiceCreateForm();
    const result = await serviceCreateForm.execute({
      title,
      description,
    });

    return response.json(result);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Form']
    const { id } = request.params;
    const serviceDeleteForm = new ServiceDeleteForm();
    const deleted = await serviceDeleteForm.execute({
      id,
    });
    return response.json(deleted);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;
    const { id } = request.params;

    const serviceUpdateForm = new ServiceUpdateForm();
    const form = await serviceUpdateForm.execute({
      id,
      title,
      description,
    });

    return response.json(form);
  }
}
