import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CentroCusto from '../entities/CentroCusto';

interface IDeleteCentroCusto {
  id: string;
}

export class ServiceDeleteCentroCusto {
  async execute({ id }: IDeleteCentroCusto) {
    const repo = dataSource.getRepository(CentroCusto);

    const centroCusto = await repo.findOneBy({ id });

    if (!centroCusto) {
      throw new Error('Not Found');
    }

    await repo.delete({ id });

    return 'Deleted';
  }
}
