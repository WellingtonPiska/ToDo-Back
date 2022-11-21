import { Request, Response } from 'express';
import { ServiceSyncLocation } from '../services/ServiceSyncLocation';
import { ServiceSyncSector } from '../services/ServiceSyncSector';

export default class SyncController {
  public async location(
    request: Request,
    response: Response
  ): Promise<Response> {
    const svcSyncLocation = new ServiceSyncLocation();

    const data = await svcSyncLocation.execute();
    return response.json(data);
  }

  public async sector(request: Request, response: Response): Promise<Response> {
    const svcSyncSector = new ServiceSyncSector();

    const data = await svcSyncSector.execute();
    return response.json(data);
  }
}
