import { Request, Response } from 'express';

import { ServiceFindState } from '../services/ServiceFindState';
import { ServiceListState } from '../services/ServiceListState';

export default class StateController {
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListState = new ServiceListState();

    const data = await serviceListState.execute();
    return response.json(data);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { uf } = request.params;

    const serviceFindState = new ServiceFindState();

    const data = await serviceFindState.execute({ uf });

    return response.json(data);
  }
}
