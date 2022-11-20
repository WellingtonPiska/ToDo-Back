import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface IFindStatus {
  id: string;
}

export class ServiceFindStatus {
  async execute({ id }: IFindStatus) {

    const repo = dataSource.getRepository(Status);
    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;

  }
}
