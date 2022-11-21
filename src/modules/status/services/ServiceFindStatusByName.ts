import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface IFindStatus {
  name: string;
}

export class ServiceFindStatusByName {
  async execute({ name }: IFindStatus) {
    const repo = dataSource.getRepository(Status);
    const data = await repo.findOneBy({ name });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;
  }
}
