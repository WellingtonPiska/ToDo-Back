import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import CostCenter from "../entities/CostCenter";
import CostCenterRepository from "../repository/CostCenterRepository";
import { ServiceFindCostCenter } from "./ServiceFindCostCenter";

interface IUpdateCostCenter {
  id: string;
  name: string;
  obs: string;
  status: string;
  apportion: string;
}

export class ServiceUpdateCostCenter {
  async execute({ id, name, obs, status, apportion }: IUpdateCostCenter): Promise<CostCenter> {
    const repo = new CostCenterRepository();

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const costCenterValid = await repo.findValidUpdate(id, name);

    if (costCenterValid) {
      throw new Error('CostCenter duplicado');
    }
    costCenter.apportion = apportion;
    costCenter.name = name;
    costCenter.obs = obs;
    costCenter.status = statusRef.id;
    await repo.update(costCenter);
    return costCenter;
  }
}

