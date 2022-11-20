import { Request, Response } from 'express';

import { ServiceListUser } from '../services/ServiceListUser';
// import { ServiceCreateStatus } from '../services/ServiceCreateStatus';
// import { ServiceDeleteStatus } from '../services/ServiceDeleteStatus';
// import { ServiceFindStatus } from '../services/ServiceFindStatus';

// import { ServiceUpdateStatus } from '../services/ServiceUpdateStatus';

export default class UserController {

  public async list(request: Request, response: Response): Promise<Response> {
    const svcList = new ServiceListUser();

    const data = await svcList.execute();

    return response.json(data);
  }

  // public async find(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const serviceFindStatus = new ServiceFindStatus();

  //   const status = await serviceFindStatus.execute({ id });

  //   return response.json(status);
  // }

  // public async create(request: Request, response: Response): Promise<Response> {
  //   const { name, reference, color } = request.body;

  //   const serviceCreateStatus = new ServiceCreateStatus();
  //   const result = await serviceCreateStatus.execute({
  //     name,
  //     reference,
  //     color,
  //   });

  //   return response.json(result);
  // }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const { name, reference, color } = request.body;
  //   const { id } = request.params;

  //   const serviceUpdateStatus = new ServiceUpdateStatus();
  //   const status = await serviceUpdateStatus.execute({
  //     id,
  //     name,
  //     reference,
  //     color,
  //   });

  //   return response.json(status);
  // }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;
  //   const serviceDeleteStatus = new ServiceDeleteStatus();
  //   const status = await serviceDeleteStatus.execute({
  //     id,
  //   });

  //   return response.json(status);
  // }
}
