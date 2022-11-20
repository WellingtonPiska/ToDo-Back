import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface IFindStatus {
  id: string;
}

export class ServiceFindStatus {
  async execute({ id }: IFindStatus) {
    const repo = dataSource.getRepository(Status);

    const status = await repo.findOneBy({ id });

    if (!status) {
      throw new Error('Registro não encontrado.');
    }

    return status;
  }
}
