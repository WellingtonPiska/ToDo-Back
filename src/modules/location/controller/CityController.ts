import { Request, Response } from 'express';

import { ServiceListCity } from '../services/ServiceListCity';

export default class CityController {
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceListCity = new ServiceListCity();
    const { uf } = request.params;

    const data = await serviceListCity.execute({ uf });
    return response.json(data);
  }
}
