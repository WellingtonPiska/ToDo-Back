import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import CostCenter from '../entities/CostCenter';
import CostCenterRepository from '../repository/CostCenterRepository';

type ICreateCostCenter = {
  name: string;
  obs: string;
  apportion: string;
};

export class ServiceCreateCostCenter {
  async execute({
    name,
    obs,
    apportion,
  }: ICreateCostCenter): Promise<CostCenter> {
    const repo = new CostCenterRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const costCenterValid = await repo.findByName(name);

    if (costCenterValid) {
      throw new Error('CostCenter já existe');
    }

    const cc = new CostCenter();
    cc.name = name;
    cc.obs = obs;
    cc.status = statusRef.id;
    cc.apportion = apportion;
    const obj = await repo.create(cc);

    return obj;
  }
}
