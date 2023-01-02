import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import CostCenter from '../entities/CostCenter';
import { ServiceFindCostCenter } from './ServiceFindCostCenter';

type IPutEditStatusCostCenter = {
  id: string;
  ref: string;
};

export class ServiceEditStatusCostCenter {
  async execute({ id, ref }: IPutEditStatusCostCenter) {
    const repo = dataSource.getRepository(CostCenter);

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    costCenter.status = status.id;

    const obj = await repo.save(costCenter);
    return obj;
  }
}
