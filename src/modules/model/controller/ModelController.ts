import { Request, Response } from 'express';

import { ServiceCreateModel } from '../services/ServiceCreateModel';
import { ServiceDeleteModel } from '../services/ServiceDeleteModel';
import { ServiceFindModel } from '../services/ServiceFindModel';
import { ServiceListModel } from '../services/ServiceListModel';
import { ServiceUpdateModel } from '../services/ServiceUpdateModel';

export default class ModelController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListModel = new ServiceListModel();

    const model = await serviceListModel.execute({
      page,
      limit,
      ref,
    });

    return response.json(model);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindModel = new ServiceFindModel();

    const model = await serviceFindModel.execute({ id });

    return response.json(model);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, company, deviceType, description } = request.body;

    const serviceCreateModel = new ServiceCreateModel();
    const model = await serviceCreateModel.execute({
      name,
      company,
      deviceType,
      description,
    });
    return response.json(model);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, company, description, deviceType } = request.body;
    const { id } = request.params;

    const serviceUpdateModel = new ServiceUpdateModel();
    const model = await serviceUpdateModel.execute({
      id,
      name,
      company,
      deviceType,
      description,
    });

    return response.json(model);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteModel = new ServiceDeleteModel();
    const model = await serviceDeleteModel.execute({
      id,
    });

    return response.json(model);
  }
}
