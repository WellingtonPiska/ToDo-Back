import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CostCenter from '../entities/CostCenter';


interface IFindCostCenter {
  id: string;
}

export class ServiceFindCostCenter {
  async execute({ id }: IFindCostCenter) {
    if (!id) {
      throw new Error('CostCenter não encontrado');
    }

    const repo = dataSource.getRepository(CostCenter);
    const costCenter = await repo.findOneBy({ id });

    if (!costCenter) {
      throw new Error('CostCenter não encontrado');
    }

    return costCenter;
  }
}
