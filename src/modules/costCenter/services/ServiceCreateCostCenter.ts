import StatusRepository from "../../status/repository/StatusRepository";
import CostCenter from "../entities/CostCenter";
import CostCenterRepository from "../repository/CostCenterRepository";

interface ICreateCostCenter {
  name: string;
  obs: string;
  status: string;
  apportion: string;
}

export class ServiceCreateCostCenter {
  async execute({ name, obs, status, apportion }: ICreateCostCenter) {
    const repo = new CostCenterRepository();

    const repoStatus = new StatusRepository();

    const statusRef = await repoStatus.findById(status)

    if (!statusRef) {
      throw new Error('Status não cadastrado')
    }

    const costCenterValid = await repo.findByName(name);

    if (costCenterValid) {
      throw new Error('CostCenter já existe');
    }

    const costCenter = new CostCenter();
    costCenter.name = name;
    costCenter.obs = obs;
    costCenter.status = statusRef.id;
    costCenter.apportion = apportion;

    const obj = await repo.create(costCenter);

    return obj;
  }
}
