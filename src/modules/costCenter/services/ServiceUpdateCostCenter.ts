import StatusRepository from "../../status/repository/StatusRepository";
import CostCenterRepository from "../repository/CostCenterRepository";

interface IUpdateCostCenter {
  id: string;
  name: string;
  obs: string;
  status: string;
  apportion: string;
}

export class ServiceUpdateCostCenter {
  async execute({ id, name, obs, status, apportion }: IUpdateCostCenter) {
    const repo = new CostCenterRepository();
    const costCenter = await repo.findById(id);
    if (!costCenter) {
      throw new Error('CostCenter não existe')
    }
    const repoStatus = new StatusRepository();
    const statusRef = await repoStatus.findById(status);

    if (!statusRef) {
      throw new Error('Status não encontrado')
    }

    const costCenterValid = await repo.findValidUpdate(id, name);

    if (costCenterValid) {
      throw new Error('CostCenter duplicado');
    }

    costCenter.name = name;
    costCenter.obs = obs;
    costCenter.status = statusRef.id;
    costCenter.apportion = apportion;
    await repo.update(costCenter);
    return costCenter;
  }
}
