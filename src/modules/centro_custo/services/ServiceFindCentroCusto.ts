import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CentroCusto from '../entities/CentroCusto';


interface IFindCentroCusto {
  id: string;
}

export class ServiceFindCentroCusto {
  async execute({ id }: IFindCentroCusto) {
    const repo = dataSource.getRepository(CentroCusto);

    const centroCusto = await repo.findOneBy({ id });

    if (!centroCusto) {
      throw new Error('Centro de custo não encontrado');
    }

    return centroCusto;
  }
}
