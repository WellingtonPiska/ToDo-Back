import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Sector from '../entities/Sector';
import { ServiceFindSector } from './ServiceFindSector';

type IPutEditStatusSector = {
  id: string;
  ref: string;
};

export class ServiceEditStatusSector {
  async execute({ id, ref }: IPutEditStatusSector) {
    const repo = dataSource.getRepository(Sector);

    const serviceFindSector = new ServiceFindSector();
    const sector = await serviceFindSector.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    sector.status = status.id;

    const obj = await repo.save(sector);
    return obj;
  }
}
