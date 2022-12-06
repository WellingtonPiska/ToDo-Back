import { Request, Response } from 'express';
import { ServicePopulate } from '../services/ServicePopulate';

export default class PopulateController {
  public async populate(
    request: Request,
    response: Response
  ): Promise<Response> {
    const svc = new ServicePopulate();
    const data = svc.execute();

    return response.json(data);
  }
}
