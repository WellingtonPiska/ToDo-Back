import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CostCenter from '../entities/CostCenter';

export class ServiceListCostCenter {
  async execute() {
    const repo = dataSource.getRepository(CostCenter);
    const costCenter = await repo.find({
      relations: {
        statusRef: true
      }
    });
    return costCenter;
  }
}
