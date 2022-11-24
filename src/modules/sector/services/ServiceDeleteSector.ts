import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';
import { ServiceFindSector } from './ServiceFindSector';


interface IDeleteSector {
  id: string;
}

export class ServiceDeleteSector {
  async execute({ id }: IDeleteSector): Promise<Boolean> {
    const repo = dataSource.getRepository(Sector);
    const serviceFindSector = new ServiceFindSector();
    const sector = await serviceFindSector.execute({ id });
    await repo.delete({ id: sector.id });
    return true;
  }
}
