import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CostCenter from '../entities/CostCenter';


interface IFindCostCenter {
  id: string;
}

export class ServiceFindCostCenter {
  async execute({ id }: IFindCostCenter) {
    const repo = dataSource.getRepository(CostCenter);
    console.log(id);
    const costCenter = await repo.findOneBy({ id });

    if (!costCenter) {
      throw new Error('CostCenter não encontrado');
    }

    return costCenter;
  }
}
