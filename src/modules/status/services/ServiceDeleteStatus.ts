import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface IDeleteStatus {
  id: string;
}

export class ServiceDeleteStatus {
  async execute({ id }: IDeleteStatus) {
    const repo = dataSource.getRepository(Status);

    const status = await repo.findOneBy({ id });

    if (!status) {
      throw new Error('Registro não encontrado.');
    }

    await repo.delete({ id });

    return {'message': 'Registro excluído.'};
  }
}
