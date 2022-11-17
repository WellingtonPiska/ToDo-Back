import { Request, Response } from 'express';
import { ServiceListUF } from '../services/ServiceListUf';
import { ServiceFindUF } from '../services/ServiceFindUF';

export default class UFController {
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListUf = new ServiceListUF();

    const uf = await serviceListUf.execute();
    return response.json(uf);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { uf } = request.params;

    const serviceFindUF = new ServiceFindUF();

    const status = await serviceFindUF.execute({ uf });

    return response.json(status);
  }
}
