import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import CostCenter from '../entities/CostCenter';

interface ICreateCostCenter {
  name: string;
  obs: string;
  apportion: string;
  status: string;
}

export class ServiceCreateCostCenter {

  async execute({ name, apportion, obs, status }: ICreateCostCenter) {
    const repo = dataSource.getRepository(CostCenter);

    const serviceFindStatus = new ServiceFindStatus();

    const statusRef = await serviceFindStatus.execute({ id: status });

    const costCenterValid = await repo
      .createQueryBuilder('status')
      .where('status.cce_name_s = :name', {
        name,
      })
      .getOne();

    if (costCenterValid) {
      throw new Error('Duplicate register');
    }

    const cc = new CostCenter();
    cc.name = name;
    cc.obs = obs;
    cc.apportion = apportion;
    cc.status = statusRef.id;
    const obj = await repo.save(cc);

    return obj;
  }
}
