import { Request, Response } from 'express';
import { ServiceListCidade } from '../services/ServiceListCidade';

export default class CidadeController {
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListCiadde = new ServiceListCidade();
    const { uf } = request.params;

    const data = await serviceListCiadde.execute({ uf });
    return response.json(data);
  }
}
