import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CostCenter from '../entities/CostCenter';

interface IDeleteCostCenter {
  id: string;
}

export class ServiceDeleteCostCenter {
  async execute({ id }: IDeleteCostCenter) {
    const repo = dataSource.getRepository(CostCenter);

    const costCenter = await repo.findOneBy({ id });

    if (!costCenter) {
      throw new Error('Not Found');
    }

    await repo.delete({ id });

    return 'Deleted';
  }
}
