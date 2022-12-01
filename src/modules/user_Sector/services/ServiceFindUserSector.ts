import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserSector from '../entities/UserSector';

interface IFindUserSector {
  id: string;
}

export class ServiceFindUserSector {
  async execute({ id }: IFindUserSector) {

    const repo = dataSource.getRepository(UserSector);
    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;

  }
}
