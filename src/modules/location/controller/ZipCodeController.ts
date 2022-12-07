import { Request, Response } from 'express';

import { ServiceFindZipCode } from '../services/ServiceFindZipCode';

export default class ZipCodeController {
  public async find(request: Request, response: Response): Promise<Response> {
    const serviceFindZipCode = new ServiceFindZipCode();
    const { cep } = request.params;

    const data = await serviceFindZipCode.execute({ cep });
    return response.json(data);
  }
}
