import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import CostCenter from "../entities/CostCenter";
import CostCenterRepository from "../repository/CostCenterRepository";

interface ICreateCostCenter {
  name: string;
  obs: string;
  status: string;
  apportion: string;
}

export class ServiceCreateCostCenter {
  async execute({ name, obs, status, apportion }: ICreateCostCenter): Promise<CostCenter> {
    const repo = new CostCenterRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

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
