import CostCenter from '../entities/CostCenter';
import CostCenterRepository from '../repository/CostCenterRepository';
import { ServiceFindCostCenter } from './ServiceFindCostCenter';

type IUpdateCostCenter = {
  id: string;
  name: string;
  obs: string;
  apportion: string;
};

export class ServiceUpdateCostCenter {
  async execute({
    id,
    name,
    obs,
    apportion,
  }: IUpdateCostCenter): Promise<CostCenter> {
    const repo = new CostCenterRepository();

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({ id });

    const costCenterValid = await repo.findValidUpdate(id, name);

    if (costCenterValid) {
      throw new Error('CostCenter duplicado');
    }
    costCenter.apportion = apportion;
    costCenter.name = name;
    costCenter.obs = obs;
    await repo.update(costCenter);
    return costCenter;
  }
}
