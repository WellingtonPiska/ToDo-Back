import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import User from '../entities/User';

interface IFindUser {
  id: string;
}

export class ServiceFindUser {
  async execute({ id }: IFindUser) {

    const repo = dataSource.getRepository(User);
    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;

  }
}
