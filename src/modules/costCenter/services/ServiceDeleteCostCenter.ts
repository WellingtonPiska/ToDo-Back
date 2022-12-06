import CostCenterRepository from '../repository/CostCenterRepository';
import { ServiceFindCostCenter } from './ServiceFindCostCenter';

type IDeleteCostCenter = {
  id: string;
};

export class ServiceDeleteCostCenter {
  async execute({ id }: IDeleteCostCenter): Promise<boolean> {
    const repo = new CostCenterRepository();
    const serviceFindCosCenter = new ServiceFindCostCenter();
    const profile = await serviceFindCosCenter.execute({ id });
    await repo.remove(profile);
    return true;
  }
}
