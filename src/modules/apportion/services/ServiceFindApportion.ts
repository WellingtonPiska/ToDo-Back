import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Apportion from '../entities/Apportion';

interface IFindApportion {
  id: string;
}

export class ServiceFindApportion {
  async execute({ id }: IFindApportion) {

    const repo = dataSource.getRepository(Apportion);
    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;

  }
}
