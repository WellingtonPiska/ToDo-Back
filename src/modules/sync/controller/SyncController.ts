import { Request, Response } from 'express';
import { ServiceSyncSector } from '../services/ServiceSyncSector';

export default class SyncController {
  public async sector(request: Request, response: Response): Promise<Response> {
    const svcSyncSector = new ServiceSyncSector();

    const data = await svcSyncSector.execute();
    return response.json(data);
  }
}
