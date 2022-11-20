import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import CostCenter from '../entities/CostCenter';
import { ServiceFindCostCenter } from './ServiceFindCostCenter';

interface IUpdateCostCenter {
  id: string;
  name: string;
  obs: string;
  apportion: string;
  status: string;
}

export class ServiceUpdateCostCenter {
  async execute({ id, name, obs, apportion, status }: IUpdateCostCenter) {
    const repo = dataSource.getRepository(CostCenter);
    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const costCenterValid = await repo
      .createQueryBuilder('costcenter')
      .where(
        'costcenter.cce_id_s <> :id and (costcenter.cce_name_s = :name)',
        {
          id,
          name
        }
      )
      .getOne();

    if (costCenterValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: costCenter.id,
      name,
      obs,
      apportion,
      status: statusRef.id
    });
    return obj;
  }
}
