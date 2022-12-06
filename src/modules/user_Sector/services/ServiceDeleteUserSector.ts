import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserSector from '../entities/UserSector';
import { ServiceFindUserSector } from './ServiceFindUserSector';

type IDeleteUserSector = {
  id: string;
};

export class ServiceDeleteUserSector {
  async execute({ id }: IDeleteUserSector): Promise<boolean> {
    const repo = dataSource.getRepository(UserSector);
    const serviceFindUserSector = new ServiceFindUserSector();
    const ucc = await serviceFindUserSector.execute({ id });
    await repo.delete({ id: ucc.id });
    return true;
  }
}
