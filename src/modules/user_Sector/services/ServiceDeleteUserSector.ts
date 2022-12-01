import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserSector from '../entities/UserSector';
import { ServiceFindUserSector } from './ServiceFindUserSector';


interface IDeleteUserSector {
  id: string;
}

export class ServiceDeleteUserSector {
  async execute({ id }: IDeleteUserSector): Promise<Boolean> {
    const repo = dataSource.getRepository(UserSector);
    const serviceFindUserSector = new ServiceFindUserSector();
    const ucc = await serviceFindUserSector.execute({ id });
    await repo.delete({ id: ucc.id });
    return true;
  }
}
